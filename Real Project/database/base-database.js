const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name
    }
    //With callback
    save(objects){
        return new Promise((resolve,reject) => {
            fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2), (err) => {
                if (err) reject(err)
                resolve()
            })
        })
    }
    //With callback
    load(){
        return new Promise((resolve,reject) => {
            fs.readFile(`${__dirname}/${this.filename}.json`, 'utf8',(err,file) =>{
                if(err) return reject(err)
                const objects = flatted.parse(file)
    
                resolve(objects.map(this.model.create)) //callback(err,file)
            })
        })
    }
    //With callback
    //In this api first time we using load and save api
    async insert (object){
        const objects = await this.load()
        objects.push(object)
        return this.save(objects)

    }
    
    remove(index){
        this.load((err,objects) => {
            objects.splice(index, 1)
            this.save(objects)
        })
    }

    update(object){
        const objects = this.load()
        const index = objects.findIndex(o => o.id == object.id)
        objects.splice(index, 1, object)
        this.save(objects)
    }
    //With promise

    findBy(property, value){
        return this.load().find(o => o[property] == value)
    }
    //With promise
    find(id, callback){
        this.load((err,objects) => {
            if (err) return callback(err)
            callback(null, objects.find(o => o.id == id))
        })
    }
}

module.exports = BaseDatabase
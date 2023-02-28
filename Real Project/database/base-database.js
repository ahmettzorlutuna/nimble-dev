const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name
    }
    //With promise
    save(objects){
        return new Promise((resolve,reject) => {
            fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2), (err) => {
                if (err) reject(err)
                resolve()
            })
        })
    }
    //With promise
    load(){
        return new Promise((resolve,reject) => {
            fs.readFile(`${__dirname}/${this.filename}.json`, 'utf8',(err,file) =>{
                if(err) return reject(err)
                const objects = flatted.parse(file)
                resolve(objects.map(this.model.create)) //callback(err,file)
            })
        })
    }
    //With promise
    //In this api first time we using load and save api
    //Bir fonksiyonun içnide await keyword ünü kullanıyorsak o fonksiyonun asenkron olduğunu async olarak belirtmemiz gerekiyor.
    async insert (object){
        const objects = await this.load()
        objects.push(object)
        return this.save(objects)
    }
    
    async remove(index){
        const objects = await this.load()
        objects.splice(index,1)
        return this.save(objects)
    }

    async update(object){
        const objects = await this.load()
        const index = objects.findIndex(o => o.id == object.id)
        objects.splice(index, 1, object)
        return this.save(objects)
    }
    async findBy(property, value){
        return (await this.load()).find(o => o[property] == value);
    }
    async findByName(name){
        const objects = await this.load()
        return objects.find(o => o.name == name)
    }
    //With promise
    async find(id){
        const objects = await this.load()
        return objects.find(o => o.id == id)
    }
}

module.exports = BaseDatabase
const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase{
    constructor(model){
        this.model = model
    }
    //With promise
    save(objects){
        return this.model.insert(objects)
        
        //Without mongoose
        // return new Promise((resolve,reject) => {
        //     fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2), (err) => {
        //         if (err) reject(err)
        //         resolve()
        //     })
        // })
    }
    //With promise
    load(){
        return this.model.find({})
        
        //Without mongoose
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
        return await this.model.create(object)

        //Without mongoose
        const objects = await this.load()
        if(!(object instanceof this.model)){
            object = this.model.create(object)
            objects.push(object)
        }
        await this.save(objects)
        return object
    }

    async removeBy(prop,value){
        return this.model.deleteOne({[prop]: value})

        //Without Mongoose
        const objects = await this.load()
        const index = objects.findIndex(o => o[property] == value)
        objects.splice(index, 1)
        return this.save(objects)
    }

    async update(id, object){
        return this.model.findByIdAndUpdate(id, object)

        //Without mongoose
        const objects = await this.load()
        const index = objects.findIndex(o => o.id == object.id)
        objects.splice(index, 1, object)
        return this.save(objects)
    }
    //With promise
    async find(id){
        return this.model.findById(id)

        ////Without Mongoose
        const objects = await this.load()
        return objects.find(o => o.id == id)
    }
    async findBy(property, value){
        return this.model.find({[property]: value})

        //Without Mongoose
        return (await this.load()).find(o => o[property] == value);
    }
}

module.exports = BaseDatabase
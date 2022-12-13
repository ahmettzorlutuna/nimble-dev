const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.constructor.name
    }

    save(objects){
        fs.writeFileSync(`./${this.filename}.json`, flatted.stringfy(objects, null, 2))
    }

    load(){
        const file = fs.readFileSync(`./${this.filename}.json`,'utf8')
        return flatted.parse(file)
    }

    insert(object){
        const objects = this.load()
        objects.push(object)
        save(objects)
    }

    remove(index){
        const objects = this.load()
        objects.splice(index, 1)
        save(objects)
    }

    findByName(name){
        const objects = this.load()
        return objects.find(o => o.name == name) 
    }
}

module.exports = BaseDatabase

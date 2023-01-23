const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name
    }
    //With callback
    save(objects, callback = () => {console.log("internal write driver")}){
        fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2),callback)
    }
    
    load(){
        const file = fs.readFileSync(`${__dirname}/${this.filename}.json`, 'utf8')
        const objects = flatted.parse(file)
        return objects.map(this.model.create)
    }
    //With callback
    insert (object, callback = () => {}){
        const objects = this.load()
        objects.push(object)
        this.save(objects, callback)
    }
    
    remove(index){
        const objects = this.load()
        objects.splice(index, 1)
        this.save(objects)
    }

    update(object){
        const objects = this.load()
        const index = objects.findIndex(o => o.id == object.id)
        objects.splice(index, 1, object)
        this.save(objects)
    }
    findBy(property, value){
        return this.load().find(o => o[property] == value)
    }
}

module.exports = BaseDatabase
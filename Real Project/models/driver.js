const uuid = require('uuid')

class Driver {
    constructor(name, location, id = uuid.v4()) {
        this.id = id
        this.name = name;
        this.location = location;

    }
    static create({name, location, id}){
        return new Driver(name,location, id)
    }
}

module.exports = Driver;
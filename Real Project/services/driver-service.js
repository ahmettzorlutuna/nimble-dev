const BaseDatabase = require('./base-service')
const Driver = require('../models/driver')

class DriverDatabase extends BaseDatabase{
    async findByDriverName(name){
        return this.findBy('name', name)
    }

    async findByLocation(location){
        return this.findBy('location', location)
    }
    async findYoungDrivers(){
        // return this.model.find({age:{$lt:30}})
        return this.query({
            age:{
                $lt: 30
            }
        })
    }
}

module.exports = new DriverDatabase(Driver) //new keyword for singleton pattern
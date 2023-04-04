const BaseDatabase = require('./base-database')
const Driver = require('../models/driver')

class DriverDatabase extends BaseDatabase{
    async findByDriverName(name){
        return this.findBy('name', name)
    }

    async findByLocation(location){
        return this.findBy('location', location)
    }
}

module.exports = new DriverDatabase(Driver) //new keyword for singleton pattern
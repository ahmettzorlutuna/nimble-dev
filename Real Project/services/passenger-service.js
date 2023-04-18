const BaseDatabase = require('./base-service')
const Passenger = require('../models/passenger')

class PassengerDatabase extends BaseDatabase{
    async findByName(name){
        return this.findBy('name', name)
    }

    async findByLocation(location){
        return this.findBy('location', location)
    }
}

module.exports = new PassengerDatabase(Passenger) //new keyword for singleton pattern
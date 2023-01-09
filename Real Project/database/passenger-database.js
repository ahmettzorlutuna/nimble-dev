const BaseDatabase = require('./base-database')
const Passenger = require('../passenger')

class PassengerDatabase extends BaseDatabase{
    findByName(name){
        return this.findBy('name' == name)
    }

    findByLocation(location){
        return this.findBy('location' == location)
    }
}

module.exports = new PassengerDatabase(Passenger)
const BaseDatabase = require('./base-database')
const Passenger = require('../passenger')

class PassengerDatabase extends BaseDatabase{
    findByName(name){
        const objects = this.load()
        return objects.find(o => o.name == name)
    }
}

module.exports = new PassengerDatabase(Passenger)
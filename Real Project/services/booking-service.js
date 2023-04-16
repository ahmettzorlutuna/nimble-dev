const BaseDatabase = require('./base-service')
const Booking = require('../models/booking')

class BookingDatabase extends BaseDatabase{
    async findByPassengerId(passengerId){
        return this.findBy('passenger', passengerId)
    }

    async findByDriverId(driverId){
        return this.findBy('driver', driverId)
    }
}

module.exports = new BookingDatabase(Booking)
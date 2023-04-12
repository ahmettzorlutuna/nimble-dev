const BaseDatabase = require('./base-database')
const Passenger = require('../models/passenger')
const bookingDatabase = require('./booking-database')


class PassengerDatabase extends BaseDatabase{
    async findByName(name){
        return this.findBy('name', name)
    }

    async findByLocation(location){
        return this.findBy('location', location)
    }

    async book(driver, passenger, origin, destination){
        const booking = await bookingDatabase.insert({driver, passenger, origin, destination})
        // this.bookings.push(booking) //Circular dependencies 
        passenger.bookings.push(booking)
        await passenger.save()
        return booking
    }
}

module.exports = new PassengerDatabase(Passenger) //new keyword for singleton pattern
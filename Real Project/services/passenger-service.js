const BaseDatabase = require('./base-service')
const Passenger = require('../models/passenger')
const bookingDatabase = require('./booking-service')
const driverDatabase = require('./driver-service')


class PassengerDatabase extends BaseDatabase{
    async findByName(name){
        return this.findBy('name', name)
    }

    async findByLocation(location){
        return this.findBy('location', location)
    }
    //Passenger booking service
    async book(driverId, passengerId, origin, destination){
        const passenger = await this.find(passengerId)
        const driver = await driverDatabase.find(driverId) 

        const booking = await bookingDatabase.insert({driver, passenger, origin, destination})
        // this.bookings.push(booking) //Circular dependencies 
        passenger.bookings.push(booking)
        await passenger.save()
        return booking
    }
}

module.exports = new PassengerDatabase(Passenger) //new keyword for singleton pattern
const BaseDatabase = require('./base-service')
const Booking = require('../models/booking')
const driverService = require('./driver-service')
const passengerService = require('./passenger-service')

class BookingDatabase extends BaseDatabase{
    async findByPassengerId(passengerId){
        return this.findBy('passenger', passengerId)
    }

    async findByDriverId(driverId){
        return this.findBy('driver', driverId)
    }
    //Passenger booking service
    async book(driverId, passengerId, origin, destination){
        const passenger = await passengerService.find(passengerId)
        const driver = await driverService.find(driverId) 

        const booking = await this.insert({driver, passenger, origin, destination})
        // this.bookings.push(booking) //Circular dependencies 
        passenger.bookings.push(booking)
        await passenger.save()
        return booking
    }
}

module.exports = new BookingDatabase(Booking)
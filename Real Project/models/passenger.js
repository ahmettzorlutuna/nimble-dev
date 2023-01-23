const Booking = require('./booking')
const uuid = require('uuid')
class Passenger {
    constructor(name, location, bookings = [], id = uuid.v4()) {
        this.id = id
        this.name = name
        this.location = location
        this.bookings = bookings
    }
    book(driver, origin = undefined, destination = undefined) {
        const booking = new Booking(driver, this, origin, destination)
        this.bookings.push(booking)
        return booking
    }

    static create({name, location, bookings, id}){
        return new Passenger(name,location,bookings, id)
    }
}

module.exports = Passenger
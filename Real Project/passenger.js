const Booking = require('./booking')
class Passenger {
    constructor(name, location, bookings = []) {
        this.name = name
        this.bookings = bookings
        this.location = location
    }
    book(driver, origin, destination) {
        const booking = new Booking(driver, this, origin, destination)
        this.bookings.push(booking)
        return booking
    }

    static create({name, location, bookings}){
        return new Passenger(name,location,bookings)
    }
}

module.exports = Passenger;
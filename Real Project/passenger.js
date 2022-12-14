const Booking = require('./booking')
class passenger {
    constructor(name, location) {
        this.name = name
        this.bookings = []
        this.location = location
    }
    book(driver, origin, destination) {
        const booking = new Booking(driver, this, origin, destination)

        this.bookings.push(booking);

        return booking
    }
}

module.exports = passenger;
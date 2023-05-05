const colors = require('colors')

function printAllBookings(passenger) {
    if(passenger.bookings.length == 0){
        return console.log(`${colors.yellow(passenger.name)} has no bookings yet`)
    }
    passenger.bookings.forEach(printBooking)
}

function printBooking(booking) {
    console.log(`${colors.yellow(booking.passenger.name)} is going ${colors.yellow(booking.destination)} from ${colors.yellow(booking.origin)} now. Estimated time not calculated yet.`)
}


module.exports = printAllBookings
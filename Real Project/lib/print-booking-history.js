const colors = require('colors')

function printAllBookings(passenger) {
    if(passenger.bookings.length == 0){
        console.log(`${passenger.name.red.bold} has no bookings yet.`)
    }
    passenger.bookings.forEach(printBooking); 
}

function printBooking(booking) {
    console.log(`${booking.passenger.name.yellow} is going ${colors.yellow.bold(booking.destination)} from ${colors.yellow(booking.origin)} now. Estimated time not calculated yet.`)
}


module.exports = printAllBookings
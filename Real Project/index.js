const colors = require('colors')
const Passenger = require('./passenger')
const Driver = require('./driver')
const driverDatabase = require('./driver-database')
const passengerDatabase = require('./passenger-database')

/* const ahmet = new Passenger("Ahmet", "Miami")
const tuna = new Passenger("Tuna", "NJ") */
const cj = new Driver("Cj", "Enderson Tower");
const alex = new Driver("Alex", "Kadıköy");
/* 
const booking1 = ahmet.book(cj, "Miami", "LosAngeles")
const booking2 = ahmet.book(cj, "İstanbul", "Esengeless")
const booking3 = ahmet.book(cj, "İzmir", "Boston")
const booking4 = ahmet.book(cj, "İzmir", "Boston")
const booking5 = ahmet.book(cj, "İzmir", "Boston")
const booking6 = tuna.book(cj, "LA", "Miami")
const booking7 = tuna.book(cj, "İstanbul", "Boston") */

function printAllBookings(passenger) {
    if(passenger.bookings.length == 0){
        console.log(`${passenger.name.red.bold} has no bookings yet.`)
    }
    passenger.bookings.forEach(printBooking);
}

function printBooking(booking) {
    console.log(`${booking.passenger.name.yellow} is going ${booking.destination.yellow.bold} from ${booking.origin.yellow} now. Estimated time not calculated yet.`)
}

const ahmet = passengerDatabase.findByName('Ahmet')
ahmet.book(cj, "İstanbul", "Esengeless")


printAllBookings(ahmet)



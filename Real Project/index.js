const colors = require('colors')
const Passenger = require('./passenger')
const Driver = require('./driver')
const {driverDatabase, passengerDatabase} = require('./database')
const { findBy } = require('./database/passenger-database')

const ahmet = new Passenger("Ahmet", "Miami")
const tuna = new Passenger("Tuna", "NJ")
const cj = new Driver("Cj", "Enderson Tower");
const alex = new Driver("Alex", "Kadıköy");

const booking1 = ahmet.book(cj, "Miami", "LosAngeles")
const booking2 = ahmet.book(cj, "İstanbul", "Esengeless")
const booking3 = ahmet.book(cj, "Tokyo", "Korea")
const booking6 = tuna.book(cj, "LA", "Miami")
const booking7 = tuna.book(cj, "İstanbul", "Boston")

function printAllBookings(passenger) {
    if(passenger.bookings.length == 0){
        console.log(`${passenger.name.red.bold} has no bookings yet.`)
    }
    passenger.bookings.forEach(printBooking); 
}

function printBooking(booking) {
    console.log(`${booking.passenger.name.yellow} is going ${colors.yellow.bold(booking.destination)} from ${colors.yellow(booking.origin)} now. Estimated time not calculated yet.`)
}









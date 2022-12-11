const colors = require('colors')
const Passenger = require('./passenger')
const Driver = require('./driver')
const db = require('./database')


const ahmet = new Passenger("Ahmet", "Miami")
const tuna = new Passenger("Tuna", "NJ")
const cj = new Driver("Cj", "Enderson Tower");

const booking1 = ahmet.book(cj, "Miami", "LosAngeles")
const booking2 = ahmet.book(cj, "İstanbul", "Esengeless")
const booking3 = ahmet.book(cj, "İzmir", "Boston")
const booking4 = tuna.book(cj, "LA", "Miami")
const booking5 = tuna.book(cj, "İstanbul", "Boston")

function printAllBookings(passenger) {
    if(passenger.bookings == null){
        console.log(`${passenger.name} has no bookings yet.`)
    }
    passenger.bookings.forEach(printBooking);
}

function printBooking(booking) {
    console.log(`${booking.passenger.name.yellow} is going ${booking.destination.yellow.bold} from ${booking.origin.yellow} now. Estimated time not calculated yet.`)
}
//db.save('passengers', [ahmet,tuna])


/* const betul = new Passenger("Betül","Yılmaz")
db.insert('passengers',betul)
db.remove('passengers', 6) */
//db.save('passengers', [ahmet, tuna])
const betul = db.findByName('passengers','Betül')



const passengers = db.load('passengers')
passengers.forEach(p => console.log(p.name))





//console.log(ahmet.bookings)

//passengers.forEach(p => console.log(p.name))





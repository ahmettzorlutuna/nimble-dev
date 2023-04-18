const Booking = require('./booking')
// const uuid = require('uuid')

const mongoose = require('mongoose')

const PassengerSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    location: String,
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking', 
        autopopulate: { maxDepth: 2}
    }]
})

PassengerSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('Passenger', PassengerSchema)

// class Passenger {
//     constructor(name, location, bookings = [], id = uuid.v4()) {
//         this.id = id
//         this.name = name
//         this.location = location
//         this.bookings = bookings
//     }
//     book(driver, origin = undefined, destination = undefined) {
//         const booking = new Booking(driver, this, origin, destination)
//         this.bookings.push(booking)
//         return booking
//     }

//     static create({name, location, bookings, id}){
//         return new Passenger(name,location,bookings, id)
//     }
// }

// module.exports = Passenger
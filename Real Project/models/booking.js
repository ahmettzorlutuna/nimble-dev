const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        autopopulate: true
    },
    passenger : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Passenger',
        autopopulate: true
    },
    origin: String,
    destination: String
})

BookingSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Booking', BookingSchema)
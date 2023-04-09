const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    driver: {},
    passenger : {},
    origin: String,
    destination: String
})

module.exports = mongoose.model('Booking', BookingSchema)
const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema({
    name: String,
    location: String,
})

module.exports = mongoose.model('Driver', DriverSchema)
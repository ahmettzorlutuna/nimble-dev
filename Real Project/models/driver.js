const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema({
    name: {type: String, required: true, minlegth: 3},
    location: {type: String, required: true, minlegth: 3},
    age: {type: Number, required: true, min: 18}
})

module.exports = mongoose.model('Driver', DriverSchema)
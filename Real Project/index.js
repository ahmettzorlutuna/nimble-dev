const PassengersRouter = require('./routes/passengers')
const DriversRouter = require('./routes/drivers')
const BookingsRouter = require('./routes/bookings')
const IndexRouter = require('./routes/index')
const bodyParser = require('body-parser')
const express = require('express') 
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())

app.set('view engine','pug')
app.use('/passengers', PassengersRouter)
app.use('/drivers', DriversRouter)
app.use('/bookings', BookingsRouter)
app.use('/', IndexRouter)



module.exports = app

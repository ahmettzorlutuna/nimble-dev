const {passengerDatabase, driverDatabase} = require('../database')
const flatted = require('flatted')
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) =>{
    const passengers = await passengerDatabase.load()
    // res.send(flatted.stringify(passengers))
    res.render('passengers', {passengers})
})
//Post request for new Passenger
router.post('/', async(req, res, next) => {
    const newPerson = await passengerDatabase.insert(req.body)
    //res.writeHead(200, {'content-type': 'text/html'})
    res.send(newPerson)
})

//Booking post request
router.post('/:passengerId/bookings',async (req,res) => {
    const {passengerId} = req.params
    const {driverId, origin, destination} = req.body
    
    const passenger = await passengerDatabase.find(passengerId)
    const driver = await driverDatabase.find(driverId) 

    passenger.book(driver, origin, destination)
    passengerDatabase.update(passenger)

    res.send(flatted.stringify(passenger))
})

//Detail
router.get('/:passengerId', async (req,res) =>{
    const passenger = await passengerDatabase.find(req.params.passengerId)
    if(!passenger) return res.status(404).send('Cannot find passenger')
    res.render('passenger', {passenger})
})

router.delete('/:passengerId', async(req,res) =>{
    await passengerDatabase.removeBy('id', req.params.passengerId)
    res.end('OK')
})

module.exports = router
const {passengerService, driverService, bookingService} = require('../services')
const flatted = require('flatted')
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) =>{
    const passengers = await passengerService.load()
    // res.send(flatted.stringify(passengers))
    res.render('passengers', {passengers})
})
//Post request for new Passenger
router.post('/', async(req, res, next) => {
    try {
        const newPerson = await passengerService.insert(req.body)
        //res.writeHead(200, {'content-type': 'text/html'})
        res.send(newPerson)
    } catch (error) {
        next(error)
    }
})

//Booking post request
router.post('/:passengerId/bookings',async (req,res) => {
    const {passengerId} = req.params
    const {driverId, origin, destination} = req.body

    const result = await bookingService.book(driverId, passengerId, origin, destination)

    res.send(result)
})

//Detail
router.get('/:passengerId', async (req,res) =>{
    const passenger = await passengerService.find(req.params.passengerId)
    if(!passenger) return res.status(404).send('Cannot find passenger')
    res.render('passenger', {passenger})
})

//Passenger Delete
router.delete('/:passengerId', async(req,res) =>{
    await passengerService.removeBy('_id',req.params.passengerId)
    res.end('OK')
})

//Passenger Update
router.patch('/:passengerId', async(req,res) => {
    const {passengerId} = req.params
    const {name} = req.body
    await passengerService.update(passengerId, {name}) // passed arg {name} is {name: 'User1'}  name is User1
    res.send('ok')
})

module.exports = router
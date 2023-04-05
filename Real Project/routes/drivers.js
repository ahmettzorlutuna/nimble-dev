const driverDatabase = require('../database/driver-database')
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) =>{
    const drivers = await driverDatabase.load()
    // res.send(flatted.stringify(drivers))
    res.render('drivers', {drivers})
})
//Post request for new driver
router.post('/', async(req, res, next) => {
    const newPerson = await driverDatabase.insert(req.body)
    //res.writeHead(200, {'content-type': 'text/html'})
    res.send(newPerson)
})

//Detail
router.get('/:driverId', async (req,res) =>{
    const driver = await driverDatabase.find(req.params.driverId)
    if(!driver) return res.status(404).send('Cannot find driver')
    res.render('driver', {driver})
})

//driver Delete
router.delete('/:driverId', async(req,res) =>{
    await driverDatabase.removeBy('_id',req.params.driverId)
    res.end('OK')
})

//driver Update
router.patch('/:driverId', async(req,res) => {
    const {driverId} = req.params
    const {name} = req.body
    await driverDatabase.update(driverId, {name}) // passed arg {name} is {name: 'User1'}  name is User1
    res.send('ok')
})

module.exports = router
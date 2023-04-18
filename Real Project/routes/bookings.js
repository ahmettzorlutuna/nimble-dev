const {bookingService} = require('../services')
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) =>{
    const bookings = await bookingService.load()
    // res.send(flatted.stringify(bookings))
    res.render('bookings', {bookings})
})

//Detail
router.get('/search', async (req,res) =>{
    const origin = req.query.origin
    const destination = req.query.destination

    const query = {}

    if(origin) query.origin = origin
    if(destination) query.destination = destination

    const bookings = await bookingService.query(query)
    if(!bookings) return res.status(404).send('Cannot find booking')
    res.render('bookings', {bookings})
})


module.exports = router
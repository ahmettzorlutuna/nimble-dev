const {passengerDatabase} = require('./database')
const Passenger = require('./models/passenger')
const bodyParser = require('body-parser')
const flatted = require('flatted')
const express = require('express') 

const app = express()
app.use(bodyParser.json())
const port = 3000

app.set('view engine','pug')

app.get('/',(req,res) =>{
    res.render(`index`) //${__dirname}: for specify root folder
})

app.get('/passengers', async (req,res) =>{
    const passengers = await passengerDatabase.load()
    // res.send(flatted.stringify(passengers))
    res.render('passengers', {passengers})
})
//Post request for new Passenger
app.post('/passengers', async(req, res, next) => {
    const newPerson = await passengerDatabase.insert(req.body)
    //res.writeHead(200, {'content-type': 'text/html'})
    res.send(newPerson)
})

//Detail
app.get('/passengers/:passengerId', async (req,res) =>{
    const passenger = await passengerDatabase.find(req.params.passengerId)
    if(!passenger) return res.status(404).send('Cannot find passenger')
    res.render('passenger', {passenger})
})

app.delete('/passengers/:passengerId', async(req,res) =>{
    await passengerDatabase.removeBy('id', req.params.passengerId)
    res.end('OK')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
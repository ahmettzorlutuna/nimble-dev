const {passengerDatabase} = require('./database')
const flatted = require('flatted')
const express = require('express') 

const app = express()
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

app.get('/passenger/__id__', async (req,res) =>{
    const passengers = await passengerDatabase.load()
    // res.send(flatted.stringify(passengers))
    res.render('passengers', {passengers})
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
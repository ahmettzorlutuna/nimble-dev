const {passengerDatabase} = require('./database')
const flatted = require('flatted')

const express = require('express') 
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('Hello Worlddd')
})

app.get('/passengers', async (req,res) =>{
    const passengers = await passengerDatabase.load()
    res.send(flatted.stringify(passengers))
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
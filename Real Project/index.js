const PassengersRouter = require('./routes/passengers')
const IndexRouter = require('./routes/index')
const bodyParser = require('body-parser')
const express = require('express') 

const app = express()
app.use(bodyParser.json())
const port = 3000

app.set('view engine','pug')
app.use('/passengers', PassengersRouter)
app.use('/', IndexRouter)


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
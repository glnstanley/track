console.log('hello world!! woohoo3')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined')) // enable logging
app.use(bodyParser.json()) // json parsing
app.use(cors()) // enable client access

// get, put, post, push, patch - request types
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(process.env.PORT || 8081)

console.log('after listener port 8081: ' + app.log)

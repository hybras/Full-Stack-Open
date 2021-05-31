const morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const personRouter = require('./routes')
const middleware = require('./middleware')

const app = express()

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
morgan.token('body', (req) => {
  if (req.method === 'POST') { return JSON.stringify({ name: req.body.name, number: req.body.number }) } else return ''
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use('/api/persons', personRouter)

app.use(middleware.unknownEndpoint)

// this has to be the last loaded middleware.
app.use(middleware.errorHandler)

module.exports = app

const morgan = require('morgan')
const cors = require('cors')
const express = require('express')

const personRouter = require('./routes')

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err, req, res, next) => {
  console.error(err.message)

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'malformed id' })
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }

  next(err)
}

const middleware = (app) => {
  app.use(express.static('build'))
  app.use(cors())
  app.use(express.json())
  morgan.token('body', (req) => {
    if (req.method === 'POST') { return JSON.stringify({ name: req.body.name, number: req.body.number }) } else return ''
  })
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

  app.use('/api/persons', personRouter)

  app.use(unknownEndpoint)

  // this has to be the last loaded middleware.
  app.use(errorHandler)
}

module.exports = middleware

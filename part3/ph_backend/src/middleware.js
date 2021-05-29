const morgan = require('morgan')
const cors = require('cors')
const express = require('express')

const routes = require('./routes')

const middleware = (app) => {
    app.use(express.static('build'))
    app.use(cors())
    app.use(express.json())
    morgan.token('body', (req) => {
        if (req.method === 'POST')
            return JSON.stringify({ 'name': req.body.name, 'number': req.body.number })
        else return ''
    })
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

    routes(app)

    const unknownEndpoint = (req, res) => {
        res.status(404).send({ error: 'unknown endpoint' })
    }

    app.use(unknownEndpoint)


    const errorHandler = (err, req, res, next) => {
        console.error(err.message)

        if (err.name === 'CastError') {
            return res.status(400).send({ error: 'malformatted id' })
        }

        next(err)
    }

    // this has to be the last loaded middleware.
    app.use(errorHandler)

}

module.exports = middleware
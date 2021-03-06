const logging = require('./logging')

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err, req, res, next) => {
  logging.error(err.message)

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'malformed id' })
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }

  next(err)
}

module.exports = { unknownEndpoint, errorHandler }

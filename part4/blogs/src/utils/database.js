const mongoose = require('mongoose')
const config = require('./config')
const logging = require('./logging')

const initDB = () => {
  return mongoose
    .connect(config.MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(res => {
      logging.info('connected to MongoDB')
    })
    .catch(err => {
      logging.error('error connecting to MongoDB:', err.message)
    })
}

module.exports = initDB

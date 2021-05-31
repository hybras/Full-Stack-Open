const mongoose = require('mongoose')
const config = require('./config')

const initDB = () => {
  return mongoose
    .connect(config.MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(res => {
      console.log('connected to MongoDB')
    })
    .catch(err => {
      console.log('error connecting to MongoDB:', err.message)
    })
}

module.exports = initDB

const mongoose = require('mongoose')

const initDB = () => {
  const url = process.env.MONGO
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(res => {
      console.log('connected to MongoDB')
    })
    .catch(err => {
      console.log('error connecting to MongoDB:', err.message)
    })
}

module.exports = initDB

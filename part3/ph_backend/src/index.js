const express = require('express')
const config = require('./config')

const middleware = require('./middleware')
const db = require('./db')

const app = express()

db().then(() => {
  middleware(app)

  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
  })
})

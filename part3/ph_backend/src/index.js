const express = require('express')
require('dotenv').config()

const middleware = require('./middleware')
const db = require('./db')

const app = express()

db()
middleware(app)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
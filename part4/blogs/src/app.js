const express = require('express')
const cors = require('cors')
const routes = require('./controllers/blogs')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/blogs', routes)

module.exports = app

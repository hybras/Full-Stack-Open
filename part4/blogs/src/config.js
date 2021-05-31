require('dotenv').config()

const PORT = process.env.PORT
const MONGO = process.env.MONGO

module.exports = { PORT, MONGO }

const mongoose = require('mongoose')

const init_db = () => {
    const url = process.env.MONGO
    mongoose
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        .then(res => {
            console.log('connected to MongoDB')
        })
        .catch(err => {
            console.log('error connecting to MongoDB:', err.message)
        })

}

module.exports = init_db
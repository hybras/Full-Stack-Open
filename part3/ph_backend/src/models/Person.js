const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');


const personSchema = new mongoose.Schema({
    name: { type: String, minLength: 3, unique: true, required: true },
    number: { type: String, minLength: 8, unique: true, required: true },
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

personSchema.plugin(uniqueValidator);


const Person = mongoose.model('Person', personSchema)

module.exports = Person
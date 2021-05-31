const Person = require('./models/Person')
const personRouter = require('express').Router()

personRouter.get('/', (req, res, next) => {
  Person.find({})
    .then(persons => {
      res.json(persons)
    })
    .catch(next)
})

personRouter.get('/:id', (req, res, next) => {
  const id = String(req.params.id)
  Person.findById(id).then(person => {
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  })
    .catch(next)
})

personRouter.delete('/:id', (req, res, next) => {
  const id = String(req.params.id)
  Person.findByIdAndDelete(id).then(person => res.json(person))
    .catch(next)
})

personRouter.put('/:id', (req, res, next) => {
  const id = String(req.params.id)
  const perp = req.body
  if (!perp.name || !perp.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }

  const person = {
    name: perp.name,
    number: perp.number
  }

  Person.findByIdAndUpdate(id, person, {
    new: true, runValidators: true, context: 'query'
  })
    .then(person => res.json(person))
    .catch(next)
})

personRouter.post('/', (req, res, next) => {
  const perp = req.body
  if (!perp.name || !perp.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }

  const person = new Person({
    name: perp.name,
    number: perp.number
  })

  person
    .save()
    .then(savedPerson => res.json(savedPerson))
    .catch(next)
})

personRouter.get('/info', (req, res) => {
  Person.countDocuments((_err, count) => res.send(`There are ${count} people in the phonebook`))
})

module.exports = personRouter

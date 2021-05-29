const Person = require('./models/Person')

const routes = (app) => {
  app.get('/api/persons', (req, res, next) => {
    Person.find({})
      .then(persons => {
        res.json(persons)
      })
      .catch(next)
  })

  app.get('/api/persons/:id', (req, res, next) => {
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

  app.delete('/api/persons/:id', (req, res, next) => {
    const id = String(req.params.id)
    Person.findByIdAndDelete(id).then(person => res.json(person))
      .catch(next)
  })

  app.put('/api/persons/:id', (req, res, next) => {
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

  app.post('/api/persons', (req, res, next) => {
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

  app.get('/info', (req, res) => {
    Person.countDocuments((_err, count) => res.send(`There are ${count} people in the phonebook`))
  })
}

module.exports = routes

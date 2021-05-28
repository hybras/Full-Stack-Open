const express = require('express')
const { nanoid } = require('nanoid')
const morgan = require('morgan')

const app = express()

app.use(express.json())
morgan.token('body', (req) => {
    if (req.method === 'POST')
        return JSON.stringify({ 'name': req.body.name, 'number': req.body.number })
    else return ''
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": nanoid()
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": nanoid()
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": nanoid()
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": nanoid()
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = String(request.params.id)
    const person = persons.find(it => it.id === id)
    if (person) {
        response.json(person)
    }
    else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = String(request.params.id)
    const person = persons.find(it => it.id === id)
    const new_persons = persons.filter(it => it.id !== id)
    if (person) {
        persons = new_persons
        response.json(person)
    }
    else {
        response.status(204).end()
    }
})

app.post('/api/persons', (req, res) => {
    const perp = req.body
    if (!perp.name || !perp.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    const contains = persons.find(it => it.name === perp.name)
    if (contains) {
        return res.status(400).json({ error: `${perp.name} is already present` })
    }
    const id = nanoid()
    const person = { id, ...perp }
    persons = persons.concat(person)
    res.json(person)
})

app.get('/info', (req, resp) => {
    resp.send(`There are ${persons.length} people in the phonebook`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
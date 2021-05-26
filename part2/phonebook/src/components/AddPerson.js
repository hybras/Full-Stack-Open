import React, { useState } from 'react'
import Notification from './Notification'
import Phonebook from '../services/Phonebook'

const AddPerson = ({ persons, setPersons }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const reset = () => {
        setName('')
        setNumber('')
    }

    const addPerson = person => {
        Phonebook.create(person).then(new_person => {
            console.log(new_person)
            const new_persons = persons.concat(new_person)
            setPersons(new_persons)
            setMsg(`${person.name} was created`)
            setIsMsg(true)
            setTimeout(() => setMsg(null), 5000)
        }).catch(() => {
            setMsg(`${person.name} couldn't be added`)
            setIsMsg(false)
            setTimeout(() => setMsg(null), 5000)
        })
    }

    const updatePerson = person => {
        const id = persons.find(it => it.name === person.name).id
        Phonebook.update(id, person).then(() => {
            setPersons(persons.map(it => it.id === id ? person : it))
            setMsg(`${person.name} was updated`)
            setIsMsg(true)
            setTimeout(() => setMsg(null), 5000)
        }).catch(() => {
            setMsg(`${person.name} couldn't be updated`)
            setIsMsg(false)
            setTimeout(() => setMsg(null), 5000)
        })

    }

    const handler = (event) => {
        event.preventDefault()
        const new_person = { name, number }
        if (persons.map(it => it.name).includes(name)) {
            const should_update = window.confirm(`${name} is already in the phonebook. RU trying to update their number`)
            if (should_update) {
                updatePerson(new_person)
                reset()
            }
        } else {
            addPerson(new_person)
            reset()
        }
    }

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onNumberChange = (event) => {
        setNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handler}>
                <div>
                    name: <input value={name} onChange={onNameChange} />
                    <br />
                    number: <input value={number} onChange={onNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPerson
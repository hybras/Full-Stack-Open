import React, { useState } from 'react'
const AddPerson = ({ persons, addPerson, updatePerson }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const reset = () => {
        setName('')
        setNumber('')
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
import React, { useState } from 'react'

const AddPerson = ({ persons, addPerson }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const myAddPerson = (event) => {
        event.preventDefault()
        if (persons.map(it => it.name).includes(name)) {
            alert(`${name} is already in the phonebook`)
        } else {
            const new_person = { name, number }
            console.log(new_person)
            addPerson(new_person)
            setName('')
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
            <form onSubmit={myAddPerson}>
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
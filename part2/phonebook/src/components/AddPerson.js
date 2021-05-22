import React, { useState } from 'react'

const AddPerson = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const new_persons = [...persons].concat({ name: newName })
        setPersons(new_persons)
        setNewName('')
    }

    const onChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={onChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {}
        </div>
    )
}

export default AddPerson
import './App.css';
import React, { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson';
import People from './components/People';
import Search from './components/Search';
import Phonebook from './services/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')

  const addPerson = new_person => {
    const new_persons = [...persons].concat(new_person)
    setPersons(new_persons)
    Phonebook.create(new_person)
  }

  useEffect(() => {
    Phonebook
      .all()
      .then(persons => setPersons(persons))
  }, [])

  return (<div>
    <AddPerson persons={persons} addPerson={addPerson} />
    <Search search={search} setSearch={setSearch} />
    <People persons={persons} search={search} setPersons={setPersons} />
  </div>)
}

export default App
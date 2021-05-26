import './App.css';
import React, { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson';
import People from './components/People';
import Search from './components/Search';
import Phonebook from './services/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    Phonebook
      .all()
      .then(persons => setPersons(persons))
  }, [])

  return (<div>
    <AddPerson persons={persons} setPersons={setPersons} />
    <Search search={search} setSearch={setSearch} />
    <People persons={persons} search={search} setPersons={setPersons} />
  </div>)
}

export default App
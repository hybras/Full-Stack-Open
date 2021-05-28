import './App.css';
import React, { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson';
import People from './components/People';
import Phonebook from './services/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    Phonebook
      .all()
      .then(persons => setPersons(persons))
  }, [])

  return (<div>
    <AddPerson persons={persons} setPersons={setPersons} />
    <People persons={persons} setPersons={setPersons}/>
  </div>)
}

export default App
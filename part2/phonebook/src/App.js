import './App.css';
import './components/AddPerson'
import './components/People'
import React, { useState } from 'react'
import AddPerson from './components/AddPerson';
import People from './components/People';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  return (<div>
    <AddPerson persons={persons} setPersons={setPersons} />
    <People persons={persons} />
  </div>)
}

export default App
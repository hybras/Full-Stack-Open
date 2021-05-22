import './App.css';
import './components/AddPerson'
import './components/People'
import React, { useState } from 'react'
import AddPerson from './components/AddPerson';
import People from './components/People';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '666 666 6666' }
  ])

  return (<div><AddPerson persons={persons} setPersons={setPersons} /><People persons={persons}/></div>)
}

export default App
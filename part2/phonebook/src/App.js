import './App.css';
import React, { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson';
import People from './components/People';
import Search from './components/Search';
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(resp => { setPersons(resp.data) })
  }, [])

  return (<div>
    <AddPerson persons={persons} setPersons={setPersons} />
    <Search search={search} setSearch={setSearch} />
    <People persons={persons} search={search} />
  </div>)
}

export default App
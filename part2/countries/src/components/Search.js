import axios from 'axios'
import { useEffect, useState } from 'react'
import Matches from './Matches'

const Search = () => {
    const [query, setQuery] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(resp => { setCountries(resp.data) })
    })
    return (<div>
        Find Countries <input value={query} onChange={(ev) => { return setQuery(ev.target.value) }} />
        <Matches query={query} countries={countries} setQuery={setQuery} />
    </div>)
}

export default Search
const Matches = ({ query, countries }) => {
    if (query !== "") {
        const filteredCountries = countries.filter(
            it => it.name.toLowerCase().includes(query.toLowerCase())
        )

        if (filteredCountries.length > 10) {
            return <div>
                Too many matches specify another filter
            </div>
        }
        else if (filteredCountries.length > 1) {
            return (<div>
                <ol>
                    {filteredCountries.map(it => <li key={it.alpha3Code}>{it.name}</li>)}
                </ol>
            </div>)
        }
        else if (filteredCountries.length === 1) {
            const country = filteredCountries[0]

            return (<div>
                <h2>{country.name}</h2>
                <img src={country.flag} alt={`${country.name}'s flag`}></img>
                <table>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>{country.population}</td>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td>
                                <ul>
                                    {country.languages.map(it => it.name).map(it => <li key={`${country.name}: ${it}`}>{it}</li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>)
        }
    }
    return (<div>
        <ol>
        </ol>
    </div>)

}

export default Matches
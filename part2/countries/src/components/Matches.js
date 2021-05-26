import Country from "./Country"

const Matches = ({ query, countries, setQuery }) => {
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
                    {filteredCountries.map(it => <li key={it.alpha3Code}>{it.name} <button onClick={() => setQuery(it.name)}>show</button> </li>)}
                </ol>
            </div>)
        }
        else if (filteredCountries.length === 1) {
            const country = filteredCountries[0]

            return <Country country={country} />
        }
    }
    return (<div>
        <ol>
        </ol>
    </div>)

}

export default Matches
const Country = ({ country }) => (<div>
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

export default Country
const People = ({ persons, search }) => {
    return (<div>
        <h2>Numbers</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {persons.filter(it => it.name.indexOf(search.toLowerCase()) > -1).map(it => <tr key={it.id}>
                    <td>{it.name}</td>
                    <td>{it.number}</td>
                </tr>)}
            </tbody>
        </table>
    </div>)
}

export default People
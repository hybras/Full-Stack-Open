const People = ({ persons }) => {
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
                {persons.map(it => <tr key={it.name}>
                    <td>{it.name}</td>
                    <td>{it.number}</td>
                </tr>)}
            </tbody>
        </table>
    </div>)
}

export default People
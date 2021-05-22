const People = ({ persons }) => {
    return (<div>
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
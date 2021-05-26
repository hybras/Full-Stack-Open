import Phonebook from "../services/Phonebook"

const People = ({ persons, search, setPersons }) => {
    const onDelete = person_id => {
        Phonebook.delete_p(person_id)
        setPersons(persons.filter(it => it.id !== person_id))
    }
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
                    <td><button onClick={() => onDelete(it.id)}>delete</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>)
}

export default People
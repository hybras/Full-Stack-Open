import { useState } from "react"
import Phonebook from "../services/Phonebook"
import Notification from "./Notification"
import Search from './Search'

const People = ({ persons, setPersons }) => {

    const [msg_or_err, setIsMsg] = useState(true)
    const [msg, setMsg] = useState(null)
    const [search, setSearch] = useState('')


    const onDelete = person_id => {
        Phonebook.delete_p(person_id).then(() => {
            setPersons(persons.filter(it => it.id !== person_id))
            setMsg(`Successful Deletion`)
            setIsMsg(true)
        }).catch(() => {
            setMsg(` Deletion failed`)
            setIsMsg(false)
        })

    }
    return (<div>
        <h2>Numbers</h2>
        <Search search={search} setSearch={setSearch} />
        <Notification message={msg} msg_or_err={msg_or_err} />
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
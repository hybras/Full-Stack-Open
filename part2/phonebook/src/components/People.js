const People = ({ persons }) => {
    return (<div>
        <ul>
            {persons.map(it => <li key={it.name}>{it.name}</li>)}
        </ul>
    </div>)
}

export default People
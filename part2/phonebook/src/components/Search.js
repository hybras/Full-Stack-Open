const Search = ({ search, setSearch }) => {

    const onChange = (event) => {
        setSearch(event.target.value)
    }

    return (<div>
        <h3>Search</h3>
        Search term: <input value={search} onChange={onChange} />
    </div>)
}

export default Search
const Search = ({ search, setSearch }) => {

    const onChange = (event) => {
        setSearch(event.target.value)
    }

    return (<div>
        <h2>Search</h2>
        Search term: <input value={search} onChange={onChange} />
    </div>)
}

export default Search
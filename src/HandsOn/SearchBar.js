const SearchBar = (props) => {
    return (
        <form onSubmit={props.handle}>
            <input type="text" name="query" placeholder="Search..."></input>
            <input type="submit" name="submit" value="Submit"></input>
        </form>
    )
}

export default SearchBar

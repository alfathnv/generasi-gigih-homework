import React from 'react'

const SearchBar = (props) => {
    return (
        <form className="search-form" onSubmit={props.handle}>
            <input
                className="search-input"
                type="text"
                name="query"
                placeholder="Search..."
            ></input>
            <button className="search-button" name="submit">
                Search
            </button>
        </form>
    )
}

export default SearchBar

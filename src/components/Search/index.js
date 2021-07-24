import React from 'react'
import Input from '../Input'
import Button from '../Button'

const Search = (props) => {
    return (
        <form onSubmit={props.handle}>
            <Input type="text" name="query" value="Search..."></Input>
            <Button name="Search"></Button>
        </form>
    )
}

export default Search

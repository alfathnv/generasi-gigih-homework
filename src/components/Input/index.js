import React from 'react'

const index = ({ type, name, value }) => {
    return <input type={type} name={name} placeholder={value}></input>
}

export default index

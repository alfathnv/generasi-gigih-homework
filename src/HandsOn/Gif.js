import React from 'react'

const Gif = (props) => {
    return <img key={props.key} src={props.url} alt={props.title}></img>
}

export default Gif

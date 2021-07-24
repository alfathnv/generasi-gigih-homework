import React, { useState, useEffect } from 'react'
import Image from '../Images'
import Button from '../Button'

const Track = ({ data, name, artist, album, url }) => {
    const [select, setSelect] = useState(() => 'Select')
    const [newDatas, setNewDatas] = useState([])

    useEffect(() => {
        select === 'Selected' ? setNewDatas(data) : console.log('notada')
    }, [select])

    const handlingSelect = () => {
        select !== 'Selected' ? setSelect('Selected') : setSelect('Deselect')
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{artist}</h2>
            <h2>{album}</h2>
            <Image url={url}></Image>
            <Button handle={handlingSelect} name={select}></Button>
        </div>
    )
}

export default Track

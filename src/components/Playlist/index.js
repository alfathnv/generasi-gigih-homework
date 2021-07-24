import React, { useState, useEffect } from 'react'
import Search from '../Search'
import { getFetchOption } from '../../assets/access'
import Track from '../Track'

const Playlist = () => {
    const [datas, setDatas] = useState([])
    const [isSelected, setIsSelected] = useState(() => false)
    const [newDatas, setNewDatas] = useState([])
    const [query, setQuery] = useState(() => '')

    useEffect(() => {
        const API_ENDPOINT = 'https://api.spotify.com/v1/search'
        const TYPE = 'track'
        const LIMIT = 12
        const paramsData = {
            q: query,
            type: TYPE,
            limit: LIMIT,
        }
        const params = new URLSearchParams(paramsData).toString()
        const url = `${API_ENDPOINT}?${params}`
        const fetchOptions = getFetchOption()
        fetch(url, fetchOptions)
            .then((res) => res.json())
            .then((json) => setDatas(json.tracks.items))
            .catch((error) => console.log(error))
    }, [query])

    const handlingSubmit = (e) => {
        e.preventDefault()
        setQuery(e.target.query.value)
    }

    return (
        <div>
            <Search handle={handlingSubmit}>data</Search>
            {datas
                ? datas.map((data) => (
                      <Track
                          key={data.uri}
                          name={data.name}
                          artist={data.artists[0].name}
                          album={data.album.name}
                          url={data.album.images[1].url}
                          data={data}
                      ></Track>
                  ))
                : console.log('Theres no data')}
        </div>
    )
}

export default Playlist

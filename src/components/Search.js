import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import { getFetchOption } from './access'
import sample from '../assets/all-sample'
import Items from './Items'
import { Select } from './select'

const Search = () => {
    const [query, setQuery] = useState(() => '')
    const { datas, setDatas, token, isSelected, handleSelect } = Select()

    useEffect(() => {
        console.log(token)
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
        const fetchOptions = getFetchOption(token)
        query
            ? fetch(url, fetchOptions)
                  .then((res) => res.json())
                  .then((json) => setDatas(json.tracks.items))
                  .catch((error) => console.log(error))
            : setDatas(sample)
    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(e.target.query.value)
    }

    return (
        <div>
            <SearchBar handle={handleSubmit} />
            <div>
                {datas.map((data) => (
                    <Items
                        url={data.album.images[1].url}
                        name={data.name}
                        artist={data.artists[0].name}
                        album={data.album.name}
                        key={data.uri}
                        handle={() => handleSelect(data.uri)}
                        select={!isSelected(data.uri) ? 'Select' : 'Selected'}
                    ></Items>
                ))}
            </div>
        </div>
    )
}

export default Search

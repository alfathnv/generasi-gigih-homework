import { getFetchOption } from './access'
import { useEffect } from 'react'

const Fetch = (query) => {
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
            .then((json) => {
                return json.tracks.items
            })
            .catch((error) => error)
    }, [query])
}

export default Fetch

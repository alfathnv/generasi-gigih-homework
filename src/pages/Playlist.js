import { useSelector, useDispatch } from 'react-redux'
import { search, addTrack, removeTrack } from '../redux/playlistSlice'
import { useState, useEffect } from 'react'
import sample from '../assets/sample'
import { getOptions } from '../assets/spotify'
import Search from '../components/Search'
import Tracks from '../components/Tracks'
import CreatePlaylist from '../components/CreatePlaylist'
import styles from './pages.module.css'

const Playlist = () => {
    const { token, datas, tracks } = useSelector((state) => state.playlist)
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

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
        const fetchOptions = getOptions(token)
        query
            ? fetch(url, fetchOptions)
                  .then((res) => res.json())
                  .then((json) => dispatch(search(json.tracks.items)))
                  .catch((error) => console.log(error))
            : dispatch(search(sample))
    }, [dispatch, query, token])

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(e.target.query.value)
    }

    const isSelected = (id) => {
        return tracks.includes(id)
    }

    const handleSelect = (id) => {
        if (!isSelected(id)) {
            addSelect(id)
        } else {
            removeSelect(id)
        }
    }

    const addSelect = (id) => {
        dispatch(addTrack(id))
    }

    const removeSelect = (id) => {
        dispatch(removeTrack(id))
    }

    return (
        <div className={styles.playlist_container}>
            <div className={styles.search}>
                <Search handle={handleSubmit} />
            </div>
            <div className={styles.tracks}>
                {datas.map((data) => (
                    <Tracks
                        url={data.album.images[1].url}
                        name={data.name}
                        artist={data.artists[0].name}
                        album={data.album.name}
                        key={data.uri}
                        handle={() => handleSelect(data.uri)}
                        select={!isSelected(data.uri) ? 'Select' : 'Selected'}
                    ></Tracks>
                ))}
            </div>
            <CreatePlaylist />
        </div>
    )
}

export default Playlist

import { useSelector, useDispatch } from 'react-redux'
import { search } from '../redux/playlistSlice'
import { useState, useEffect } from 'react'
import sample from '../assets/sample'
import { getOptions } from '../assets/spotify'
import Search from '../components/Search'
import Tracks from '../components/Tracks'
import CreatePlaylist from '../components/CreatePlaylist'
import styles from './pages.module.css'
import { Select } from '../components/Select'

const Playlist = () => {
  const { token, datas } = useSelector((state) => state.playlist)
  const [query, setQuery] = useState('twice')
  const dispatch = useDispatch()
  const { isSelected, handleSelect } = Select()

  useEffect(() => {
    console.log(token)
    const API_ENDPOINT = 'https://api.spotify.com/v1/search'
    const TYPE = 'track'
    const LIMIT = 20
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

  return (
    <div className={styles.playlist_container}>
      <div className={styles.search}>
        <Search handle={handleSubmit} />
      </div>
      <div className={styles.tracks_container}>
        {datas.map((data) => (
          <Tracks
            url={data.album.images[1].url}
            name={data.name}
            artist={data.artists[0].name}
            album={data.album.name}
            key={data.uri}
            handle={() => handleSelect(data.uri)}
            select={!isSelected(data.uri) ? styles.track : styles.track_select}
          ></Tracks>
        ))}
      </div>
      <CreatePlaylist />
    </div>
  )
}

export default Playlist

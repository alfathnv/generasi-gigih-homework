import { createPlaylistOption, addTrackOption } from './access'

const createPlaylist = (token, data) => {
    const user_id = '0lrntv74y350btob9z21yjhxh'
    const request_body = {
        name: 'aw',
        description: 'aw',
        public: false,
    }
    const url = `https://api.spotify.com/v1/users/${user_id}/playlists`
    const options = createPlaylistOption(token, request_body)
    fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
            data.length === 0
                ? console.log(json)
                : addTrackPlaylist(token, json.id, data)
        })
        .catch((error) => console.log(error))
}

const addTrackPlaylist = (token, id, data) => {
    const playlist_id = id
    const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
    const options = addTrackOption(token, data)
    fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
        })
        .catch((error) => console.log(error))
}

export { createPlaylist }

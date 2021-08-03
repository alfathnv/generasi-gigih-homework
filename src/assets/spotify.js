// import sample from './sample'

const getOptions = (token) => {
    const options = {
        method: 'GET',
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    }
    return options
}

const postOptions = (token, data) => {
    const options = {
        method: 'POST',
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
        body: JSON.stringify(data),
    }
    return options
}

// const searchTrack = (token, query) => {
//     console.log(`ini query ${query}`)
//     console.log(`ini token ${token}`)
//     const API_ENDPOINT = 'https://api.spotify.com/v1/search'
//     const paramsData = {
//         q: query,
//         type: 'track',
//         limit: 12,
//     }
//     const params = new URLSearchParams(paramsData).toString()
//     const url = `${API_ENDPOINT}?${params}`
//     const fetchOptions = getOptions(token)
//     let data = []
//     if (query) {
//         data = fetch(url, fetchOptions)
//             .then((res) => res.json())
//             .then((json) => {
//                 return json.tracks.items
//             })
//             .catch((error) => console.log(error))
//     } else {
//         data = sample
//     }
//     console.log(`ini data ${data}`)
//     return data
// }

const createPlaylist = (token, data, request) => {
    const user_id = '0lrntv74y350btob9z21yjhxh'
    const url = `https://api.spotify.com/v1/users/${user_id}/playlists`
    const options = postOptions(token, request)
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
    const options = postOptions(token, data)
    fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
        })
        .catch((error) => console.log(error))
}

export { getOptions, createPlaylist }

const getOptions = (token: string) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  }
  return options
}

const postOptions = (token: string, request: Object) => {
  const options = {
    method: 'POST',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(request),
  }
  return options
}

const createPlaylist = (token: string, data: Array<string>, request: object) => {
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

const addTrackPlaylist = (token:string, id:Array<string>, request: Object) => {
  const playlist_id = id
  const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
  const options = postOptions(token, request)
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
    })
    .catch((error) => console.log(error))
}

export { getOptions, createPlaylist }

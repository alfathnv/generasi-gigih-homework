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

const getUser = (token: string) => {   
  const url = "https://api.spotify.com/v1/me";
  const options = getOptions(token);
  return fetch(url, options)
    .then((res) => res.json())
}

const getSearch = (token: string, query: string) => {
  const endpoint = "https://api.spotify.com/v1/search";
  const paramsData: { q: string; type: string; limit: string } = {
    q: query,
    type: "track",
    limit: "20",
  };
  const params = new URLSearchParams(paramsData).toString();
  const url = `${endpoint}?${params}`;
  const fetchOptions = getOptions(token);
  return fetch(url, fetchOptions)
    .then((res) => res.json())
}

const createPlaylist = (token: string, data: Array<string>, id:string, request: object) => {
  const user_id = id
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

export { getUser, getSearch, createPlaylist}

const authLink = () => {
    const url = 'https://accounts.spotify.com/authorize'
    const paramsData = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        response_type: 'token',
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        state: '123',
        scope: 'playlist-modify-private%20playlist-modify-public',
    }
    const params = new URLSearchParams(paramsData).toString()
    return `${url}?${params}`
}

const getAccessToken = () => {
    const currentLocation = String(window.location).split('#')[1]
    const params = new URLSearchParams(currentLocation)
    const ACCESS_TOKEN = params.get('access_token')
    return ACCESS_TOKEN
}

export { authLink, getAccessToken }

const getAccessToken = () => {
    const currentLocation = String(window.location).split('#')[1]
    const params = new URLSearchParams(currentLocation)
    const ACCESS_TOKEN = params.get('access_token')
    return ACCESS_TOKEN
}

const getFetchOption = () => {
    const fetchOptions = {
        method: 'GET',
        headers: new Headers({
            Authorization: `Bearer ${getAccessToken()}`,
        }),
    }
    return fetchOptions
}

export { getFetchOption }

const getAccessToken = () => {
    const currentLocation = String(window.location).split("#")[1];
    const params = new URLSearchParams(currentLocation);
    const ACCESS_TOKEN = params.get("access_token");
    return ACCESS_TOKEN;
};

const getFetchOption = (token) => {
    const options = {
        method: "GET",
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    };
    return options;
};

const createPlaylistOption = (token, data) => {
    const options = {
        method: "POST",
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
        body: JSON.stringify(data),
    };
    return options;
};

const addTrackOption = (token, data) => {
    const options = {
        method: "POST",
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
        body: JSON.stringify(data),
    };
    return options;
};

export { getAccessToken, getFetchOption, createPlaylistOption, addTrackOption };

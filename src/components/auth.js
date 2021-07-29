const auth = () => {
    const AUTH_BASE_URL = "https://accounts.spotify.com/authorize";
    const SCOPE = "playlist-modify-private";
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const paramsData = {
        response_type: "token",
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        state: "123",
        scope: SCOPE,
    };
    const params = new URLSearchParams(paramsData).toString();
    return `${AUTH_BASE_URL}?${params}`;
};

export { auth };

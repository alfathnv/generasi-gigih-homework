import { getFetchOption } from "./access";

const getTracks = async (query) => {
  const API_ENDPOINT = "https://api.spotify.com/v1/search";
  const TYPE = "track";
  const LIMIT = 12;
  const paramsData = {
    q: query,
    type: TYPE,
    limit: LIMIT,
  };
  const params = new URLSearchParams(paramsData).toString();
  const url = `${API_ENDPOINT}?${params}`;
  const fetchOptions = getFetchOption();
  const data = await fetch(url, fetchOptions)
    .then((res) => res.json())
    .catch((error) => error);
  data.error === undefined
    ? console.log(data.tracks.items)
    : console.log("error");
};

export { getTracks };

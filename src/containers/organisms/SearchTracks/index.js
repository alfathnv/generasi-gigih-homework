import React from "react";
import Search from "../../../components/moleculs/SearchInput";
import { getFetchOption } from "../../../assets/Spotify/access";
import { useState } from "react";
import Heading2 from "../../../components/atoms/Heading2";
import Heading1 from "../../../components/atoms/Heading1";
import "./index.css";

const SearchTracks = () => {
  const [tracks, setTracks] = useState([]);

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
    const tracks = await fetch(url, fetchOptions)
      .then((res) => res.json())
      .catch((error) => console.log("error"));
    tracks.error === undefined
      ? setTracks(tracks.tracks.items)
      : console.log("error");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    getTracks(query);
  };

  return (
    <div className="playlist-container">
      <div>
        <Search handle={handleSubmit} />
      </div>
      <div>
        {tracks.map((item) => (
          <div className="track-container" key={item.id}>
            <img className="image" src={item.album.images[1].url}></img>
            <div className="middle">
              <Heading1 class="text title" name={item.name} />
              <Heading2 class="text artist" name={item.artists[0].name} />
              <Heading2 class="text album" name={item.album.name} />
              <a className="link" href={item.uri}>
                Play
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchTracks;

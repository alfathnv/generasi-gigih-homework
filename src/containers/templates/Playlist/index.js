import React from "react";
import SearchTracks from "../../organisms/SearchTracks";
import "./index.css";

const index = () => {
  return (
    <div className="playlist-container">
      <header>
        <SearchTracks></SearchTracks>
      </header>
      <div className="Main"></div>
    </div>
  );
};

export default index;

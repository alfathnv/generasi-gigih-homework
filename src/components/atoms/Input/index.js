import React from "react";

const Search = (props) => {
  return (
    <form onSubmit={props.handle}>
      <input type="text" name="query" placeholder="Search..."></input>
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;

// import React from "react";

import SearchOptions from "./SearchOptions";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" />
      <SearchOptions />
      <button className="search-btn pointer">Search</button>
    </div>
  );
}

export default SearchBar;

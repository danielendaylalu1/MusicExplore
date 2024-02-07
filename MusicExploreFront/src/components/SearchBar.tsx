// import React from "react";

import { useDispatch, useSelector } from "react-redux";
import SearchOptions from "./SearchOptions";
import { searchValueHandler } from "../store/uiSlice";
import { RootState } from "../store/store";

function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={searchValue}
        onChange={(e) => dispatch(searchValueHandler(e.target.value))}
      />
      <SearchOptions />
      <button className="search-btn pointer">Search</button>
    </div>
  );
}

export default SearchBar;

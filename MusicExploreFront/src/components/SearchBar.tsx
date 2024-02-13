// import React from "react";

import { useDispatch, useSelector } from "react-redux";
import SearchOptions from "./SearchOptions";
import { searchValueHandler } from "../store/uiSlice";
import { RootState } from "../store/store";
import {
  pointer,
  searchBarStyle,
  searchBtn,
  searchInput,
} from "../style/style";

function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  return (
    <div css={searchBarStyle}>
      <input
        type="text"
        css={searchInput}
        value={searchValue}
        onChange={(e) => dispatch(searchValueHandler(e.target.value))}
      />
      <SearchOptions />
      <button css={[searchBtn, pointer]}>Search</button>
    </div>
  );
}

export default SearchBar;

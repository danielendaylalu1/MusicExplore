import { useDispatch, useSelector } from "react-redux";
import Select, { StylesConfig } from "react-select";
import { RootState } from "../store/store";
import { setSearchVal } from "../store/uiSlice";
// import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

interface Options {
  value: string;
  label: string;
}

const customStyles: StylesConfig<Options, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#f5f5f5",
    maxWidth: "120px",
    color: "black",
    outlineOffset: "none",
    cursor: "pointer",
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: "#f5f5f5",
    color: "black",
  }),
};

interface Options {
  value: string;
  label: string;
}

const SearchOptions = () => {
  const searchVal = useSelector((state: RootState) => state.ui.searchVal);
  // const [ref, setRef] = useState();
  const dispatch = useDispatch();
  const options: Options[] = [
    { value: "songs", label: "songs" },
    { value: "albums", label: "albums" },
    { value: "artists", label: "artists" },
    { value: "genres", label: "genres" },

    // other options...
  ];
  const handleChange = (option: Options | null) => {
    dispatch(setSearchVal(option?.value));
  };

  const selectedOption = options.find((option) => option.value === searchVal);

  console.log(selectedOption);
  return (
    <Select
      options={options}
      value={selectedOption}
      // defaultValue={selectedOption}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default SearchOptions;

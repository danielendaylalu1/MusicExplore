import { useDispatch } from "react-redux";
import Select, { StylesConfig } from "react-select";
// import { RootState } from "../store/store";
import { setSearchVal } from "../store/uiSlice";

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

const options: Options[] = [
  { value: "songs", label: "All" },
  { value: "albums", label: "Albums" },
  { value: "genres", label: "Aenres" },
  { value: "artists", label: "Artists" },
  // other options...
];

const SearchOptions = () => {
  // const searchVal = useSelector((state: RootState) => state.ui.searchVal);
  const dispatch = useDispatch();
  const handleChane = (option) => {
    dispatch(setSearchVal(option.value));
  };
  console.log(options);
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      styles={customStyles}
      onChange={handleChane}
    />
  );
};

export default SearchOptions;

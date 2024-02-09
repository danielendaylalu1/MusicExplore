import Select, { StylesConfig } from "react-select";

interface Options {
  value: string;
  label: string;
}

const options: Options[] = [
  { value: "songs", label: "all" },
  { value: "albums", label: "Albums" },
  { value: "artists", label: "Artists" },
  { value: "genres", label: "Genres" },
];

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

const SearchOptions = () => (
  <Select options={options} defaultValue={options[0]} styles={customStyles} />
);

export default SearchOptions;

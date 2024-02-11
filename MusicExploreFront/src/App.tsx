/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

import { PiWaveform } from "react-icons/pi";

import AddSong from "./components/AddSong";

import DisplayPage from "./components/pages/DisplayPage";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const showDisplay = useSelector((state: RootState) => state.ui.showDisplay);

  // console.log("app page runs---");

  return (
    <div className="app">
      <AddSong />
      <div className="container">
        <Navbar />
        <div className="outlet p-3 bg-light-gray">
          <SearchBar />
          <Outlet />
        </div>
        <div
          className={`display p-3 bg-white ${showDisplay && "show-display"}`}
        >
          <div className="display-icon-wrapper">
            <PiWaveform className="display-top-icon" />
          </div>
          <DisplayPage />
        </div>
      </div>
    </div>
  );
}

export default App;

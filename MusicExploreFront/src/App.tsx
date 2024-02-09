/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
// import DisplayHeader from "./components/DisplayHeader";
import { PiWaveform } from "react-icons/pi";
// import DisplayDetail from "./components/DisplayDetail";
import AddSong from "./components/AddSong";
// import { useSelector } from "react-redux";
// import { RootState } from "./store/store";
import DisplayPage from "./components/pages/DisplayPage";

function App() {
  // const songDisplay = useSelector((state: RootState) => state.songDisplay);
  // const status = useSelector((state:RootState))

  console.log("app page runs---");

  return (
    <div className="app">
      <AddSong />
      <div className="container">
        <Navbar />
        <div className="outlet p-3 bg-light-gray">
          <SearchBar />

          <Outlet />
        </div>
        <div className="display p-3 bg-white">
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

import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import DisplayHeader from "./components/DisplayHeader";
import { PiWaveform } from "react-icons/pi";
import DisplayDetail from "./components/DisplayDetail";
import { useState } from "react";
import AddSong from "./components/AddSong";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const [showForm, setShowForm] = useState(false);
  const songDisplay = useSelector((state: RootState) => state.songDisplay);
  return (
    <div className="app">
      {showForm && <AddSong showForm={showForm} setShowForm={setShowForm} />}
      <div className="container">
        <Navbar showForm={showForm} setShowForm={setShowForm} />
        <div className="outlet p-3 bg-light-gray">
          <SearchBar />
          <Outlet />
        </div>
        <div className="display p-3 bg-white">
          <div className="display-icon-wrapper">
            <PiWaveform className="display-top-icon" />
          </div>
          <DisplayHeader />
          <DisplayDetail song={songDisplay} />
        </div>
      </div>
    </div>
  );
}

export default App;

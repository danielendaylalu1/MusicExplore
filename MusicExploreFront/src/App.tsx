import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import DisplayHeader from "./components/DisplayHeader";
import { PiWaveform } from "react-icons/pi";
import DisplayDetail from "./components/DisplayDetail";

function App() {
  return (
    <div className="app">
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
          <DisplayHeader />
          <DisplayDetail />
        </div>
      </div>
    </div>
  );
}

export default App;

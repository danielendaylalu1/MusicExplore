import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <div className="outlet p-3 bg-light-gray">
          <SearchBar />
          <Outlet />
        </div>
        <p className="display p-3 bg-white">display</p>
      </div>
    </div>
  );
}

export default App;

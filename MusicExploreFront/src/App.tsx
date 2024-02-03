import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <p>navbar</p>
      <div className="outlet">
        <Outlet />
      </div>
      <p>display</p>
    </div>
  );
}

export default App;

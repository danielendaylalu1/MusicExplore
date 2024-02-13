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
import {
  appStyle,
  bgLightGray,
  bgWhite,
  containerStyle,
  displayIconWrapper,
  displayStyle,
  displayTopIcon,
  outletStyle,
  p3,
  showDisplayStyle,
} from "./style/style";

function App() {
  const showDisplay = useSelector((state: RootState) => state.ui.showDisplay);

  return (
    <div css={appStyle}>
      <AddSong />
      <div css={containerStyle}>
        <Navbar />
        <div css={[outletStyle, p3, bgLightGray]}>
          <SearchBar />
          <Outlet />
        </div>
        <div css={[displayStyle, p3, bgWhite, showDisplay && showDisplayStyle]}>
          <div css={displayIconWrapper}>
            <PiWaveform css={displayTopIcon} />
          </div>
          <DisplayPage />
        </div>
      </div>
    </div>
  );
}

export default App;

// import React from "react";
import speakerIcon from "../assets/speaker-icon.png";
// import { BsThreeDots } from "react-icons/bs";

const DisplayHeader = () => {
  return (
    <div className="display-card-left">
      <img src={speakerIcon} alt="speaker icon" className="display-card-icon" />
      <div className="display-card-detail">
        <h3 className="display-card-title item-hover pointer">Nat baro</h3>
        <p className="display-card-artist item-hover pointer">Teddyafro</p>
        <p className="display-card-type pointer">song</p>
      </div>
    </div>
  );
};

export default DisplayHeader;

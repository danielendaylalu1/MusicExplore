// import React from "react";
import { FC } from "react";
import speakerIcon from "../../assets/speaker-icon.png";

interface DetailProps {
  title: string;
  artist: string;
  section: string;
}

const SongCardDetail: FC<DetailProps> = ({ title, artist, section }) => {
  return (
    <div className="song-card-left">
      <img src={speakerIcon} alt="speaker icon" className="song-card-icon" />
      <div className="song-card-detail">
        <h3 className="song-card-title item-hover pointer">{title}</h3>
        <p className="song-card-artist item-hover pointer">{artist}</p>
        <p className="song-card-type pointer">{section}</p>
      </div>
    </div>
  );
};

export default SongCardDetail;

import { useState, FC } from "react";
import speakerIcon from "../assets/speaker-icon.png";
import { BsThreeDots } from "react-icons/bs";
import { Song } from "../types";

// export

const SongCard: FC<Song> = ({ title, artist }) => {
  const [showEditor, setShowEditor] = useState(false);
  return (
    <div className="song-card">
      <div className="song-card-left">
        <img src={speakerIcon} alt="speaker icon" className="song-card-icon" />
        <div className="song-card-detail">
          <h3 className="song-card-title item-hover pointer">{title}</h3>
          <p className="song-card-artist item-hover pointer">{artist}</p>
          <p className="song-card-type pointer">song</p>
        </div>
      </div>
      <div className="song-card-right">
        <BsThreeDots
          className="three-dots pointer"
          onClick={() => setShowEditor(!showEditor)}
        />
        {showEditor && (
          <div className="song-card-editors">
            <p className="song-card-edit song-card-update pointer">Edit</p>
            <p className="song-card-edit song-card-delete pointer">Delete</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongCard;

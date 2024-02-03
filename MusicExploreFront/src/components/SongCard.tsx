import speakerIcon from "../assets/speaker-icon.png";
import { BsThreeDots } from "react-icons/bs";

const SongCard = () => {
  return (
    <div className="song-card">
      <div className="song-card-left">
        <img src={speakerIcon} alt="speaker icon" className="song-card-icon" />
        <div className="song-card-detail">
          <h3 className="song-card-title">Nat baro</h3>
          <p className="song-card-artist">Teddyafro</p>
          <p className="song-card-type">song</p>
        </div>
      </div>
      <div className="song-card-right">
        <BsThreeDots className="three-dots" />
        <div className="song-card-editors">
          <p className="song-card-edit song-card-update">Edit</p>
          <p className="song-card-edit song-card-delete">Delete</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;

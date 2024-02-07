// import React from "react";
import { FC } from "react";
import speakerIcon from "../../assets/speaker-icon.png";
import { useDispatch } from "react-redux";
import { initializeSongDisplay } from "../../store/songDisplaySlice";
import { Song } from "../../types";
import { ARTIST, GENRE, ALBUM } from "../../utils";

interface DetailProps {
  song: Song;
  section: string;
}

const SongCardDetail: FC<DetailProps> = ({ song, section }) => {
  const diaptch = useDispatch();
  return (
    <div
      className="song-card-left"
      onClick={() => diaptch(initializeSongDisplay(song))}
    >
      <img src={speakerIcon} alt="speaker icon" className="song-card-icon" />
      <div className="song-card-detail">
        <h3 className="song-card-title item-hover pointer">
          {section === GENRE
            ? song.genre
            : section === ARTIST
            ? song.artist
            : section === ALBUM
            ? song.album
            : song.title}
        </h3>
        <p className="song-card-artist item-hover pointer">
          {section === GENRE
            ? song.genre
            : section === ARTIST
            ? song.artist
            : section === ALBUM
            ? song.artist
            : song.artist}
        </p>
        <p className="song-card-type pointer">{section}</p>
      </div>
    </div>
  );
};

export default SongCardDetail;

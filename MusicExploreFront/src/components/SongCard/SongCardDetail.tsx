// import React from "react";
import { FC } from "react";
import speakerIcon from "../../assets/speaker-icon.png";
import { useDispatch } from "react-redux";
import { Song } from "../../types";
import { ARTIST, GENRE, ALBUM } from "../../utils";
import { setShowDisplay } from "../../store/uiSlice";
import {
  itemHover,
  pointer,
  songCardArtist,
  songCardDetail,
  songCardIcon,
  songCardLeft,
  songCardTitle,
  songCardType,
  textGreen,
} from "../../style/style";

interface DetailProps {
  song: Song;
  section: string;
}

const SongCardDetail: FC<DetailProps> = ({ song, section }) => {
  const dispatch = useDispatch();
  return (
    <div
      css={songCardLeft}
      onClick={() => {
        dispatch(setShowDisplay(true));
      }}
    >
      <img src={speakerIcon} alt="speaker icon" css={songCardIcon} />
      <div css={songCardDetail}>
        <h3 css={[songCardTitle, pointer, itemHover]}>
          {section === GENRE
            ? song.genre
            : section === ARTIST
            ? song.artist
            : section === ALBUM
            ? song.album
            : song.title}
        </h3>
        <p css={[songCardArtist, pointer, itemHover]}>
          {section === GENRE
            ? song.genre
            : section === ARTIST
            ? song.artist
            : section === ALBUM
            ? song.artist
            : song.artist}
        </p>
        <p css={[songCardType, pointer, textGreen]}>{section}</p>
      </div>
    </div>
  );
};

export default SongCardDetail;

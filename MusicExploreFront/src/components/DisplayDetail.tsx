// import React from "react";

import { FC } from "react";
import { songForCreate } from "../types";

interface DisplayDetailProps {
  song: songForCreate;
}

const DisplayDetail: FC<DisplayDetailProps> = ({ song }) => {
  const details = [
    {
      header: "Title",
      detail: song.title,
    },
    {
      header: "Artist",
      detail: song.artist,
    },
    {
      header: "Album",
      detail: song.album || "--",
    },
    {
      header: "Genre",
      detail: song.genre || "--",
    },
  ];
  // console.log(details);

  return (
    <div className="display-detail">
      <h3 className="display-detail-header">Song Deatils</h3>
      <div className="display-detail-card">
        {details.map((song) => {
          return (
            <div className="dispaly-detail-content" key={song.header}>
              <h3 className="detail-card-content-header">{song.header}</h3>
              <p className="detail-card-content-value">{song.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayDetail;

// import React from "react";

import { FC } from "react";
import { songForCreate } from "../types";

interface DisplayDetailProps {
  song: songForCreate;
}

const DisplayDetail: FC<DisplayDetailProps> = ({ song }) => {
  return (
    <div className="display-detail">
      <h3 className="display-detail-header">Song Deatils</h3>
      <div className="display-detail-card">
        <div className="dispaly-detail-content">
          <h3 className="detail-card-content-header">Title</h3>
          <p className="detail-card-content-value">{song.title}</p>
        </div>
        <div className="dispaly-detail-content">
          <h3 className="detail-card-content-header">Artist</h3>
          <p className="detail-card-content-value">{song.artist}</p>
        </div>
        <div className="dispaly-detail-content">
          <h3 className="detail-card-content-header">Genre</h3>
          <p className="detail-card-content-value">{song.genre || "--"}</p>
        </div>
        <div className="dispaly-detail-content">
          <h3 className="detail-card-content-header">Album</h3>
          <p className="detail-card-content-value">{song.album || "--"}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayDetail;

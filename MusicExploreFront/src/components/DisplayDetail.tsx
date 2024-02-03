// import React from "react";

const DisplayDetail = () => {
  return (
    <div className="display-detail">
      <h3 className="display-detail-header">Song Deatils</h3>
      <div className="display-detail-card">
        <div className="dispaly-detail-content">
          <h3 className="detail-card-content-header">Title</h3>
          <p className="detail-card-content-value">Nat baro</p>
        </div>
        <div className="dispaly-detail-content">
          <h3 className="detail-card-content-header">Artist</h3>
          <p className="detail-card-content-value">Teddyafro</p>
        </div>
        <div className="dispaly-detail-content">
          <h3 className="detail-card-content-header">Genre</h3>
          <p className="detail-card-content-value">Pop</p>
        </div>
        <div className="dispaly-detail-content">
          <h3 className="detail-card-content-header">Album</h3>
          <p className="detail-card-content-value">Ethiopia</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayDetail;

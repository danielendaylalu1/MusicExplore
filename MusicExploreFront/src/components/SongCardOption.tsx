// import React from "react";
import { BsThreeDots } from "react-icons/bs";

import { FC } from "react";

interface OptionProps {
  isSong: boolean;
}

const SongCardOption: FC<OptionProps> = ({ isSong }) => {
  //   const isSong = useState(false);
  return (
    <>
      {isSong ? (
        <div className="song-card-right">
          <BsThreeDots
            className="three-dots pointer"
            //   onClick={() => setShowEditor(!showEditor)}
          />

          <div className="song-card-editors">
            <p className="song-card-edit song-card-update pointer">Edit</p>
            <p className="song-card-edit song-card-delete pointer">Delete</p>
          </div>
        </div>
      ) : (
        <div className="song-card-right">
          <p className="song-card-edit song-card-delete pointer">List</p>
        </div>
      )}
    </>
  );
};

export default SongCardOption;

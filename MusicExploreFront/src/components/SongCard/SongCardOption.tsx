// import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";

import { FC, useState } from "react";

interface OptionProps {
  isSong: boolean;
  showList?: boolean;
  setShowList?: (showList: boolean) => void;
}

const SongCardOption: FC<OptionProps> = ({ isSong, showList, setShowList }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      {isSong ? (
        <div className="song-card-right">
          <BsThreeDots
            className="three-dots pointer"
            onClick={() => setShowOptions(!showOptions)}
          />

          {showOptions && (
            <div className="song-card-editors">
              <p className="song-card-edit song-card-update pointer">Edit</p>
              <p className="song-card-edit song-card-delete pointer">Delete</p>
            </div>
          )}
        </div>
      ) : (
        <div
          className="song-card-right"
          onClick={() => {
            // console.log("clicked");
            if (setShowList && showList !== undefined) {
              setShowList(showList);
            }
          }}
        >
          <p className="song-card-edit song-card-update pointer">
            List <CiCircleList style={{ fontSize: "1.25rem" }} />
          </p>
        </div>
      )}
    </>
  );
};

export default SongCardOption;

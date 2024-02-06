// import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
// import { RootState } from "../../store/store";

import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSong } from "../../store/songSlice";

interface OptionProps {
  isSong: boolean;
  showList?: boolean;
  setShowList?: (showList: boolean) => void;
  songId?: string;
}

const SongCardOption: FC<OptionProps> = ({
  isSong,
  showList,
  setShowList,
  songId,
}) => {
  // const songs = useSelector((state: RootState) => state.songs);
  const dispatch = useDispatch();
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
              <p
                className="song-card-edit song-card-delete pointer"
                onClick={() => {
                  songId && dispatch(deleteSong(songId));
                }}
              >
                Delete
              </p>
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

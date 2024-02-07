// import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
// import { RootState } from "../../store/store";

import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSongStart,
  intializeAlbumsStart,
  intializeArtistsStart,
  intializeGenresStart,
  intializeSongsStart,
} from "../../store/songSlice";
import { ALBUM, ARTIST, GENRE } from "../../utils";
import { RootState } from "../../store/store";
import { setFormShow, setUpdateFormData } from "../../store/uiSlice";

interface OptionProps {
  isSong: boolean;
  showList?: boolean;
  setShowList?: (showList: boolean) => void;
  songID?: string;
  section: string;
}

const SongCardOption: FC<OptionProps> = ({
  isSong,
  showList,
  setShowList,
  songID,
  section,
}) => {
  // const songs = useSelector((state: RootState) => state.songs);
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const showForm = useSelector((state: RootState) => state.ui.showForm);
  const data = useSelector((state: RootState) => state.songs.songs);
  const songToUpdate = data.find((song) => song.id === songID);
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
              <p
                className="song-card-edit song-card-update pointer"
                onClick={() => {
                  if (songToUpdate) {
                    dispatch(
                      setUpdateFormData({
                        data: {
                          song: songToUpdate,
                          id: songToUpdate?.id,
                        },
                        type: "Update",
                      })
                    );
                  }
                  dispatch(setFormShow(!showForm));
                }}
              >
                Edit
              </p>
              <p
                className="song-card-edit song-card-delete pointer"
                onClick={() => {
                  songID && dispatch(deleteSongStart(songID));
                  if (section === ARTIST) {
                    dispatch(intializeArtistsStart(""));
                  } else if (section === ALBUM) {
                    dispatch(intializeAlbumsStart(""));
                  } else if (section === GENRE) {
                    dispatch(intializeGenresStart(""));
                  } else {
                    dispatch(intializeSongsStart());
                  }
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

// import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";

import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSongStart } from "../../store/songSlice";

import { RootState } from "../../store/store";
import { setFormShow, setUpdateFormDataStart } from "../../store/uiSlice";
import {
  pointer,
  songCardDelete,
  songCardEdit,
  songCardEditors,
  songCardRight,
  songCardUpdate,
} from "../../style/style";

import { useLocation } from "react-router-dom";

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
}) => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const showForm = useSelector((state: RootState) => state.ui.showForm);

  const path = useLocation();
  let route: string = "";

  switch (path.pathname) {
    case "/artists":
      route = "artists";
      break;
    case "/albums":
      route = "albums";
      break;
    case "/genres":
      route = "genres";
      break;
  }

  return (
    <>
      {isSong ? (
        <div css={songCardRight}>
          <BsThreeDots
            style={{ fontSize: "1.5rem" }}
            onClick={() => setShowOptions(!showOptions)}
            css={pointer}
          />

          {showOptions && (
            <div css={songCardEditors}>
              <p
                css={[songCardEdit, songCardUpdate, pointer]}
                onClick={() => {
                  songID && dispatch(setUpdateFormDataStart(songID));
                  dispatch(setFormShow(!showForm));
                }}
              >
                Edit
              </p>
              <p
                css={[songCardEdit, songCardDelete, pointer]}
                onClick={() => {
                  songID &&
                    dispatch(
                      deleteSongStart({
                        songId: songID,
                        route: route,
                      })
                    );
                }}
              >
                Delete
              </p>
            </div>
          )}
        </div>
      ) : (
        <div
          css={songCardRight}
          onClick={() => {
            if (setShowList && showList !== undefined) {
              setShowList(showList);
            }
          }}
        >
          <p css={[songCardEdit, songCardUpdate, pointer]}>
            List <CiCircleList style={{ fontSize: "1.25rem" }} />
          </p>
        </div>
      )}
    </>
  );
};

export default SongCardOption;

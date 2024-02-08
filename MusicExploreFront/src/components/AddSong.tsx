import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  resetUpdateFormData,
  setFormShow,
  setUpdateFormData,
} from "../store/uiSlice";

import { createSongStart, updateSongStart } from "../store/songSlice";
import Spinner from "./Spinner";

import {
  addSongStyle,
  addSongFormStylle,
  addSongHeader,
  formBtn,
  formInputs,
} from "../style/style";

const AddSong = () => {
  const showForm = useSelector((state: RootState) => state.ui.showForm);
  const dispatch = useDispatch();
  const updateSongFormData = useSelector(
    (state: RootState) => state.ui.updateFormData
  );
  const isLoading = useSelector((state: RootState) => state.ui.isLoading);

  return createPortal(
    <div css={addSongStyle}>
      <div
        css={addSongStyle}
        onClick={() => {
          dispatch(setFormShow(!showForm));
          dispatch(resetUpdateFormData());
        }}
      ></div>
      <form
        css={addSongFormStylle}
        onSubmit={(e) => {
          e.preventDefault();
          if (updateSongFormData.type === "Create") {
            dispatch(
              createSongStart({
                title: updateSongFormData.song.title,
                artist: updateSongFormData.song.artist,
                album: updateSongFormData.song.album,
                genre: updateSongFormData.song.genre,
              })
            );
          } else {
            dispatch(
              updateSongStart({
                song: updateSongFormData.song,
                id: updateSongFormData.song.id,
              })
            );
          }
        }}
      >
        <h3 css={addSongHeader}>Add a Song</h3>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <input
              type="text"
              placeholder="Title"
              css={formInputs}
              value={updateSongFormData.song.title}
              onChange={(e) => {
                dispatch(
                  setUpdateFormData({
                    ...updateSongFormData,
                    song: {
                      ...updateSongFormData.song,
                      title: e.target.value,
                    },
                  })
                );
              }}
              required
            />
            <input
              type="text"
              placeholder="Artist"
              css={formInputs}
              value={updateSongFormData.song.artist}
              onChange={(e) => {
                dispatch(
                  setUpdateFormData({
                    ...updateSongFormData,
                    song: {
                      ...updateSongFormData.song,
                      artist: e.target.value,
                    },
                  })
                );
              }}
              required
            />
            <input
              type="text"
              placeholder="Genre"
              css={formInputs}
              value={updateSongFormData.song.genre}
              onChange={(e) => {
                dispatch(
                  setUpdateFormData({
                    ...updateSongFormData,
                    song: {
                      ...updateSongFormData.song,
                      genre: e.target.value,
                    },
                  })
                );
              }}
            />
            <input
              type="text"
              placeholder="Album"
              css={formInputs}
              value={updateSongFormData.song.album}
              onChange={(e) => {
                dispatch(
                  setUpdateFormData({
                    ...updateSongFormData,
                    song: {
                      ...updateSongFormData.song,
                      album: e.target.value,
                    },
                  })
                );
              }}
            />
            <button type="submit" css={formBtn}>
              {updateSongFormData.type}
            </button>
          </>
        )}
      </form>
    </div>,
    document.getElementById("modal") as HTMLDivElement
  );
};

export default AddSong;

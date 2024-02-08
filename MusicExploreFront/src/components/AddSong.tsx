import { css } from "@emotion/react";
import { createPortal } from "react-dom";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { setFormShow, setUpdateFormData } from "../store/uiSlice";

import { createSongStart, updateSongStart } from "../store/songSlice";
import Spinner from "./Spinner";

const AddSong = () => {
  const showForm = useSelector((state: RootState) => state.ui.showForm);
  const dispatch = useDispatch();
  const updateSongFormData = useSelector(
    (state: RootState) => state.ui.updateFormData
  );
  const isLoading = useSelector((state: RootState) => state.ui.isLoading);

  const addSongStyle = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4rem",
    position: "fixed",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.25)",
    top: "0",
    left: "0",
    zIndex: "100",
  });
  const addSongHeader = css({
    color: "#009688",
    textAlign: "center",
  });

  const addSongFormStylle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    width: "400px",
    padding: "2rem",
    borderRadius: "0.5rem",
    backgroundColor: "#fff",
    zIndex: "1000",
    boxShadow:
      "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
  });
  const formInputs = css({
    backgroundColor: "transparent",
    border: "1px solid #b4b4b4",
    padding: "0.5rem 1rem",
    outline: "none",
    borderRadius: "0.25rem",
    fontSize: "0.9rem",
    color: "rgb(24, 24, 24)",
    width: "100%",
  });
  const formBtn = css({
    padding: "0.5rem 1rem",
    cursor: "pointer",
    border: "none",
    backgroundColor: "rgb(39, 39, 39)",
    borderRadius: "0.25rem",
    fontSize: "0.9rem",
    color: "#f0f0f0",
    "&:hover": {
      backgroundColor: "rgb(19, 18, 18)",
    },
    minWidth: "90px",
  });

  return createPortal(
    <div css={addSongStyle}>
      <div
        css={addSongStyle}
        onClick={() => {
          dispatch(setFormShow(!showForm));
          dispatch(
            setUpdateFormData({
              song: {
                title: "",
                album: "",
                genre: "",
                artist: "",
                id: "",
              },
              type: "Create",
            })
          );
          // setShowForm(!showForm);
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
            dispatch(
              setUpdateFormData({
                song: {
                  artist: "",
                  album: "",
                  genre: "",
                  title: "",
                  id: "",
                },
                type: "Create",
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
          dispatch(
            setUpdateFormData({
              song: {
                artist: "",
                album: "",
                genre: "",
                title: "",
                id: "",
              },
              type: "Create",
            })
          );
          dispatch(setFormShow(!showForm));
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
              onChange={
                (e) => {
                  dispatch(
                    setUpdateFormData({
                      ...updateSongFormData,
                      song: {
                        ...updateSongFormData.song,
                        title: e.target.value,
                      },
                    })
                  );
                }
                // setSong((prv) => ({ ...prv, title: e.target.value }))
              }
              required
            />
            <input
              type="text"
              placeholder="Artist"
              css={formInputs}
              value={updateSongFormData.song.artist}
              onChange={
                (e) => {
                  dispatch(
                    setUpdateFormData({
                      ...updateSongFormData,
                      song: {
                        ...updateSongFormData.song,
                        artist: e.target.value,
                      },
                    })
                  );
                }
                // setSong((prv) => ({ ...prv, title: e.target.value }))
              }
              required
            />
            <input
              type="text"
              placeholder="Genre"
              css={formInputs}
              value={updateSongFormData.song.genre}
              onChange={
                (e) => {
                  dispatch(
                    setUpdateFormData({
                      ...updateSongFormData,
                      song: {
                        ...updateSongFormData.song,
                        genre: e.target.value,
                      },
                    })
                  );
                }
                // setSong((prv) => ({ ...prv, title: e.target.value }))
              }
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

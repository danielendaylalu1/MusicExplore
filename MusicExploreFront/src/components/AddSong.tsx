// import React from "react";
import { FC, useState } from "react";
import { css } from "@emotion/react";
import { createPortal } from "react-dom";
import { songForCreate } from "../types";
import { useDispatch } from "react-redux";
import { createSongStart } from "../store/songSlice";

interface NavbarProps {
  showForm: boolean;
  setShowForm: (value: boolean) => void;
}
const AddSong: FC<NavbarProps> = ({ showForm, setShowForm }) => {
  const dispatch = useDispatch();
  const [song, setSong] = useState<songForCreate>({
    title: "",
    album: "",
    genre: "",
    artist: "",
  });
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
          setShowForm(!showForm);
        }}
      ></div>
      <form
        css={addSongFormStylle}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createSongStart(song));
        }}
      >
        <h3 css={addSongHeader}>Add a Song</h3>
        <input
          type="text"
          placeholder="Title"
          css={formInputs}
          value={song.title}
          onChange={(e) => setSong({ ...song, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Artist"
          css={formInputs}
          value={song.artist}
          onChange={(e) => setSong({ ...song, artist: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          css={formInputs}
          onChange={(e) => setSong({ ...song, genre: e.target.value })}
          value={song.genre}
        />
        <input
          type="text"
          placeholder="Album"
          css={formInputs}
          onChange={(e) => setSong({ ...song, album: e.target.value })}
          value={song.album}
        />
        <button type="submit" css={formBtn}>
          Add
        </button>
      </form>
    </div>,
    document.getElementById("modal") as HTMLDivElement
  );
};

export default AddSong;

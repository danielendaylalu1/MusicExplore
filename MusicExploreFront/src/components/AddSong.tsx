// import React from "react";
import { FC } from "react";
import { css } from "@emotion/react";

const AddSong: FC = () => {
  const addSongStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4rem",
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
    maxWidth: "350px",
    padding: "2rem",
    borderRadius: "0.5rem",
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
  return (
    <div css={addSongStyle}>
      <h3 css={addSongHeader}>Add a Song</h3>

      <form css={addSongFormStylle}>
        <input type="text" placeholder="Title" css={formInputs} />
        <input type="text" placeholder="Artist" css={formInputs} />
        <input type="text" placeholder="Genre" css={formInputs} />
        <input type="text" placeholder="Album" css={formInputs} />
        <button type="submit" css={formBtn}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddSong;

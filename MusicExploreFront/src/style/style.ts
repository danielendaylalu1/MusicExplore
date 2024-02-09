import { css } from "@emotion/react";

export const addSongStyle = css({
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
export const addSongHeader = css({
  color: "#009688",
  textAlign: "center",
});

export const addSongFormStylle = css({
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
  "@media (max-width: 440px)": {
    width: "90%",
    // Add more styles as needed
  },
});
export const formInputs = css({
  backgroundColor: "transparent",
  border: "1px solid #b4b4b4",
  padding: "0.5rem 1rem",
  outline: "none",
  borderRadius: "0.25rem",
  fontSize: "0.9rem",
  color: "rgb(24, 24, 24)",
  width: "100%",
});
export const formBtn = css({
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

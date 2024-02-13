import { css } from "@emotion/react";

export const bgWhite = css({
  backgroundColor: "#fff",
});
export const bgLightGray = css({
  backgroundColor: "#f0f0f0",
});

export const pointer = css({
  cursor: "pointer",
});
export const p3 = css({
  padding: "3rem 2rem",
  "@media (max-width: 660px)": {
    padding: "3rem 2rem",
  },
  "@media (max-width: 440px)": {
    padding: "3rem 0.5rem",
  },
});

export const textGreen = css({
  color: "#009688",
});

export const w100 = css({
  width: "100%",
});

export const itemHover = css({
  "&:hover": {
    borderBottom: "1px solid #009688",
  },
});

export const appStyle = css({
  backgroundColor: "rgb(202, 201, 201)",
});

export const containerStyle = css({
  display: "flex",
  backgroundColor: "#fff",
  overflow: "hidden",
  height: "100vh",
  width: "100%",
  "@media (max-width: 660px)": {
    flexDirection: "column",
  },
});

export const navBarStyle = css({
  flex: "0.1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
  height: "100%",
  "@media (max-width: 660px)": {
    flexDirection: "row",
    height: "auto",
    padding: "1rem 2rem !important",
    justifyContent: "space-between",
    flex: "0",
  },
});
export const navBarHeaderStyle = css({
  fontSize: "1.5rem",
  fontWeight: "700",
  "@media (max-width:660px)": {
    fontSize: "1.2rem",
  },
});

export const navBarMobile = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  "@media (max-width:660px)": {
    position: "absolute",
    background: "#fff",
    top: "4rem",
    left: "-100%",
    width: "100%",
    height: "70vh",
    zIndex: "10000",
    padding: "3rem",
    opacity: "0.9",
    transition: "all 0.5s ease-in-out",
  },
});

export const showNavBarMobile = css({
  "@media (max-width:660px)": {
    left: "0",
  },
});

export const navItems = css({
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
});

export const navLink = css({
  "&:hover": {
    color: "#009688",
  },
});

export const navBarAddIcon = {
  fontSize: "2.25rem",
  color: "#fff",
  backgroundColor: "#009688",
  padding: "0.45rem",
  borderRadius: "100%",
};

export const navBarMenuIcon = css({
  display: "none",
  "@media (max-width:660px)": {
    display: "block",
    fontSize: "2rem",
  },
});

export const outletStyle = css({
  flex: "0.9",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
  overflowY: "scroll",
  "@media (max-width:660px)": {
    flex: "1",
  },
});

export const searchBarStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.5rem",
  maxWidth: "700px",
  width: "100%",
  "@media (max-width:440px)": {
    flexDirection: "column",
  },
});
export const searchInput = css({
  flex: "0.8",
  backgroundColor: "transparent",
  border: "1px solid #b4b4b4",
  padding: "0.5rem 1rem",
  outline: "none",
  borderRadius: "0.25rem",
  fontSize: "0.9rem",
  color: "rgb(24, 24, 24)",
});

export const searchBtn = css({
  padding: "0.5rem 1rem",
  border: "none",
  backgroundColor: "rgb(39, 39, 39)",
  borderRadius: "0.25rem",
  fontSize: "0.9rem",
  color: "#f0f0f0",
});

export const songsContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
});

export const songCardWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
});

export const songCardStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.85rem 1.5rem",
  background: "#fdfcfc",
  boxShadow: "rgba(17, 12, 46, 0.15) 0px 18px 25px 0px",
  borderRadius: "1rem",
  maxWidth: "700px",
  position: "relative",
});

export const songsListCard = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  padding: "0 2rem",
  maxWidth: "650px",
});
export const songList = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #e6e4e4",
  borderRadius: "0.5rem",
  padding: "0.5rem 1rem",
});

export const songCardLeft = css({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});
export const songCardRight = css({
  position: "relative",
});

export const songCardIcon = css({
  width: "40px",
  height: "40px",
});

export const songCardDetail = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

export const songCardTitle = css({
  fontSize: "1rem",
});

export const songCardArtist = css({
  fontSize: "0.7rem",
});

export const songCardType = css({
  fontSize: "0.7rem",
});

export const songCardEditors = css({
  /* display: none; */
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  minWidth: "80px",
  background: "#f0f0f0",
  padding: "0.25rem 1rem",
  border: "1px solid #b4b4b4",
  borderRadius: "0.5rem",
  zIndex: "10",
});

export const songCardEdit = css({
  fontSize: "0.9rem",
  padding: "0.2rem",
  width: "100%",
});
export const songCardUpdate = css({
  color: "#009688",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});
export const songCardDelete = css({
  color: "#c62828",
});

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

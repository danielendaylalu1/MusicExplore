// import React from "react";

// import { useState } from "react";
import DisplayDetail from "../DisplayDetail";
import DisplayHeader from "../DisplayHeader";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const DisplayPage = () => {
  const songDisplay = useSelector((state: RootState) => state.songDisplay);
  return (
    <>
      <DisplayHeader />
      <DisplayDetail song={songDisplay} />
    </>
  );
};

export default DisplayPage;

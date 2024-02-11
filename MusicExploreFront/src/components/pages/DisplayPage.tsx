// import React from "react";

import DisplayDetail from "../DisplayDetail";
import DisplayHeader from "../DisplayHeader";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { setShowDisplay } from "../../store/uiSlice";

const DisplayPage = () => {
  const songDisplay = useSelector((state: RootState) => state.songDisplay);
  const dispacth = useDispatch();
  return (
    <>
      <IoMdClose
        className="display-close-icon pointer"
        onClick={() => dispacth(setShowDisplay(false))}
      />
      <DisplayHeader />
      <DisplayDetail songDisplayData={songDisplay} />
    </>
  );
};

export default DisplayPage;

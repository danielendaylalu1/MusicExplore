// import React from "react";

// import { useEffect, useRef } from "react";
import { useEffect } from "react";
import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";
// import { AllSongs } from "../types";
import { intializeSongsStart } from "../store/songSlice";
import { RootState } from "../store/store";
// import { getSongs } from "../services/songService";

const Songs = () => {
  const data = useSelector((state: RootState) => state.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeSongsStart());
  }, [dispatch]);
  console.log(data);
  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Songs;

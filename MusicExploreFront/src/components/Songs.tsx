// import React from "react";

// import { useEffect, useRef } from "react";
import { useEffect } from "react";
import SongCard from "./SongCard";
import { getSongs } from "../services/songService";

const Songs = () => {
  useEffect(() => {
    const fetchAllSongs = async () => {
      try {
        const songs = await getSongs();
        console.log(songs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllSongs();
  }, []);
  return (
    <div className="songs">
      <div className="songs-container">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </div>
  );
};

export default Songs;

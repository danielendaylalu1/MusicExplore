// import React from "react";

import { FC } from "react";
// import { SongForCreate } from "../types";
import { SongDisplay } from "../store/songDisplaySlice";
import SongCard from "./SongCard/SongCard";
import SongCardDetail from "./SongCard/SongCardDetail";
import { Song } from "../types";

interface DisplayDetailProps {
  songDisplayData: SongDisplay;
}

export interface Detail {
  header: string;
  detail: string | undefined;
}

const DisplayDetail: FC<DisplayDetailProps> = ({ songDisplayData }) => {
  let details: Detail[] | null = null;
  let songs: Song[] | undefined = [];
  if (songDisplayData.section === "Song") {
    details = [
      {
        header: "Title",
        detail: songDisplayData.song?.title,
      },
      {
        header: "Artist",
        detail: songDisplayData.song?.artist,
      },
      {
        header: "Album",
        detail: songDisplayData.song?.album || "--",
      },
      {
        header: "Genre",
        detail: songDisplayData.song?.genre || "--",
      },
    ];
  } else if (songDisplayData.section === "Album") {
    details = [
      {
        header: "Album",
        detail: songDisplayData.album?.album.name,
      },
      {
        header: "Artist",
        detail: songDisplayData.album?.album.artist,
      },
    ];
    songs = songDisplayData.album?.songs;
  } else if (songDisplayData.section === "Artist") {
    details = [
      {
        header: "Artist",
        detail: songDisplayData.artist?.artist,
      },
    ];
    songs = songDisplayData.artist?.songs;
  } else if (songDisplayData.section === "Genre") {
    details = [
      {
        header: "Genre",
        detail: songDisplayData.genre?.genre,
      },
    ];
    songs = songDisplayData.genre?.songs;
  }

  return (
    <div className="display-detail">
      <h3 className="display-detail-header">
        {songDisplayData.section} Detail
      </h3>
      <div className="display-detail-card">
        <>
          {details?.map((item) => {
            return (
              <div className="dispaly-detail-content" key={item.header}>
                <h3 className="detail-card-content-header">{item.header}</h3>
                <p className="detail-card-content-value">{item.detail}</p>
              </div>
            );
          })}
          {songDisplayData.section !== "Song" &&
            songs?.map((item) => {
              return (
                <SongCard
                  key={item.id}
                  header={<SongCardDetail song={item} section="Song" />}
                  isSong={true}
                  songID={item.id}
                  section="song"
                />
              );
            })}
        </>
      </div>
    </div>
  );
};

export default DisplayDetail;

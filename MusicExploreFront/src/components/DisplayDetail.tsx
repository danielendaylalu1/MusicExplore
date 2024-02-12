// import React from "react";

import { FC } from "react";
// import { SongForCreate } from "../types";
import { SongDisplay } from "../store/songDisplaySlice";
import SongCard from "./SongCard/SongCard";
// import SongCardDetail from "./SongCard/SongCardDetail";
import { Song } from "../types";

interface DisplayDetailProps {
  songDisplayData: SongDisplay;
}

export interface Detail {
  header: string;
  detail: string | undefined | null;
}

const DisplayDetail: FC<DisplayDetailProps> = ({ songDisplayData }) => {
  let details: Detail[] | null = null;
  let songs: Song[] | undefined | null = [];
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
        detail: songDisplayData.album?.song.album.name,
      },
      {
        header: "Artist",
        detail: songDisplayData.album?.song.album.artist,
      },
    ];
    songs = songDisplayData.album?.song.songs;
  } else if (songDisplayData.section === "Artist") {
    details = [
      {
        header: "Artist",
        detail: songDisplayData.artist?.song.artist,
      },
    ];
    songs = songDisplayData.artist?.song.songs;
  } else if (songDisplayData.section === "Genre") {
    details = [
      {
        header: "Genre",
        detail: songDisplayData.genre?.song.genre,
      },
    ];
    songs = songDisplayData.genre?.song.songs;
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

          {songDisplayData.section !== "Song" && (
            <>
              <h3 className="display-detail-header">songs</h3>
              {songs?.map((item) => {
                return (
                  <SongCard
                    key={item.id}
                    song={item}
                    // header={<SongCardDetail song={item} section="Song" />}
                    isSong={true}
                    songID={item.id}
                    section="song"
                  />
                );
              })}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default DisplayDetail;

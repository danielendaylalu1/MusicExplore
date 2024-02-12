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

export interface Stats {
  songCount: number | undefined;
  albumCount?: number | undefined;
}

const DisplayDetail: FC<DisplayDetailProps> = ({ songDisplayData }) => {
  let details: Detail[] | null = null;
  let allsongs: Song[] | undefined | null = [];

  let stats: Stats | null = null;

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
    allsongs = songDisplayData.album?.song.songs;
    stats = {
      songCount: songDisplayData.album?.song.songs?.length,
    };
  } else if (songDisplayData.section === "Artist") {
    details = [
      {
        header: "Artist",
        detail: songDisplayData.artist?.song.artist,
      },
    ];
    allsongs = songDisplayData.artist?.song.songs;
    stats = {
      songCount: songDisplayData.artist?.song.songs?.length,
      albumCount: songDisplayData.album?.song.songs?.filter(
        (item) => item.album !== ""
      ).length,
    };
  } else if (songDisplayData.section === "Genre") {
    details = [
      {
        header: "Genre",
        detail: songDisplayData.genre?.song.genre,
      },
    ];
    allsongs = songDisplayData.genre?.song.songs;
    stats = {
      songCount: songDisplayData.genre?.song.songs?.length,
    };
  }

  console.log(songDisplayData.album?.song.statistic, "dispalyyyy");

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
          <hr />

          {songDisplayData.section !== "Song" && (
            <>
              <div className="dispaly-detail-content">
                <h3 className="detail-card-content-header">Total songs</h3>
                <p className="detail-card-content-value">{stats?.songCount}</p>
              </div>
              {songDisplayData.section === "Artist" && (
                <div className="dispaly-detail-content">
                  <h3 className="detail-card-content-header">Total albums</h3>
                  <p className="detail-card-content-value">
                    {stats?.albumCount}
                  </p>
                </div>
              )}
              <h3 className="display-detail-header">songs</h3>
              {allsongs?.map((item) => {
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

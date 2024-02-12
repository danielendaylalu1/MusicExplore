// import React from "react";

import { FC, useEffect, useState } from "react";
// import { SongForCreate } from "../types";
import { SongDisplay } from "../store/songDisplaySlice";
import SongCard from "./SongCard/SongCard";
// import SongCardDetail from "./SongCard/SongCardDetail";
import { Song } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface DisplayDetailProps {
  songDisplayData: SongDisplay;
}

export interface Detail {
  header: string;
  detail: string | undefined | null;
}
export interface initialStat {
  songCount: number | undefined;
  albumCount?: number | undefined;
}

const DisplayDetail: FC<DisplayDetailProps> = ({ songDisplayData }) => {
  const { albums, artists, genres } = useSelector(
    (state: RootState) => state.songs
  );
  let details: Detail[] | null = null;
  let allsongs: Song[] | undefined | null = [];
  const initialStat: initialStat = {
    songCount: 0,
    albumCount: 0,
  };
  const [stats, setStats] = useState(initialStat);
  useEffect(() => {
    if (songDisplayData.section === "Album") {
      const song = albums.albums.filter((item) => {
        return item.album.name === songDisplayData.album?.song.album.name;
      });
      // stats = song[0].statistic
      setStats(song[0].statistic);
      console.log(song, "songgggggggggggggggg");
    } else if (songDisplayData.section === "Artist") {
      const song = artists.artists.filter((item) => {
        return item.artist === songDisplayData.artist?.song.artist;
      });
      setStats(song[0].statistic);
    } else if (songDisplayData.section === "Genre") {
      const song = genres.genres.filter((item) => {
        return item.genre === songDisplayData.genre?.song.genre;
      });
      setStats(song[0].statistic);
    }
  }, []);

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
  } else if (songDisplayData.section === "Artist") {
    details = [
      {
        header: "Artist",
        detail: songDisplayData.artist?.song.artist,
      },
    ];
    allsongs = songDisplayData.artist?.song.songs;
  } else if (songDisplayData.section === "Genre") {
    details = [
      {
        header: "Genre",
        detail: songDisplayData.genre?.song.genre,
      },
    ];
    allsongs = songDisplayData.genre?.song.songs;
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
                <p className="detail-card-content-value">{stats.songCount}</p>
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

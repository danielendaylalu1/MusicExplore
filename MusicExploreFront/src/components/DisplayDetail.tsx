// import React from "react";

import { FC } from "react";
import { SongDisplay } from "../store/songDisplaySlice";
import SongCard from "./SongCard/SongCard";
import { Song } from "../types";
import {
  detailCardContentHeader,
  detailCardContentValue,
  displayDetail,
  displayDetailCard,
  displayDetailContent,
  displayDetailHeader,
} from "../style/style";

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

  let stats: Stats | null | undefined = null;

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
    stats = songDisplayData.album?.song.statistic;
  } else if (songDisplayData.section === "Artist") {
    details = [
      {
        header: "Artist",
        detail: songDisplayData.artist?.song.artist,
      },
    ];
    allsongs = songDisplayData.artist?.song.songs;
    stats = songDisplayData.artist?.song.statistic;
  } else if (songDisplayData.section === "Genre") {
    details = [
      {
        header: "Genre",
        detail: songDisplayData.genre?.song.genre,
      },
    ];
    allsongs = songDisplayData.genre?.song.songs;
    stats = songDisplayData.genre?.song.statistic;
  }

  return (
    <div css={displayDetail}>
      <h3 css={displayDetailHeader}>{songDisplayData.section} Detail</h3>
      <div css={displayDetailCard}>
        <>
          {details?.map((item) => {
            return (
              <div key={item.header} css={displayDetailContent}>
                <h3 css={detailCardContentHeader}>{item.header}</h3>
                <p css={detailCardContentValue}>{item.detail}</p>
              </div>
            );
          })}
          <hr />

          {songDisplayData.section !== "Song" && (
            <>
              <div css={displayDetailContent}>
                <h3 css={detailCardContentHeader}>Total songs</h3>
                <p css={detailCardContentValue}>{stats?.songCount}</p>
              </div>
              {songDisplayData.section === "Artist" && (
                <div css={displayDetailContent}>
                  <h3 css={detailCardContentHeader}>Total albums</h3>
                  <p css={detailCardContentValue}>{stats?.albumCount}</p>
                </div>
              )}
              <h3 css={displayDetailHeader}>songs</h3>
              {allsongs?.map((item) => {
                return (
                  <SongCard
                    key={item.id}
                    song={item}
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

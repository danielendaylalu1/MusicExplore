import { AxiosError } from "axios";
export interface Song {
  title: string;
  artist: string;
  genre?: string;
  album?: string;
  id: string;
}
export interface Statistic {
  songCount: number;
  albumCount?: number;
}
export type SongForCreate = Omit<Song, "id">;
export interface SongForUpdate {
  song: SongForCreate;
  id: string;
}
export interface AlbumDetail {
  name: string;
  artist: string;
}
export interface Songs {
  songs: Song[];
  count: number;
}
export interface Album {
  album: AlbumDetail;
  songs: Song[];
  statistic: Statistic;
}
export interface Albums {
  albums: Album[];
  count: number;
}
export interface Artist {
  artist: string;
  songs: Song[];
  statistic: Statistic;
}
export interface Artists {
  artists: Artist[];
  count: number;
}
export interface Genre {
  genre: string;
  songs: Song[];
  statistic: Statistic;
}
export interface Genres {
  genres: Genre[];
  count: number;
}
export type AllSongs = Songs;
export type AllAlbums = Albums;
export type AllArtists = Artists;
export type AllGenres = Genres;

export interface Message {
  message: string;
}

export type AxiosErrorWithResponse = AxiosError & {
  response: {
    data: {
      message: string;
      error: string[];
    };
  };
};

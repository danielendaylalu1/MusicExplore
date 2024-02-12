import { AxiosError } from "axios";
export interface Song {
  title: string;
  artist: string;
  genre?: string;
  album?: string;
  id: string;
}
export interface Statstic {
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
  statstic: Statstic;
}
export interface Album {
  album: AlbumDetail;
  songs: Song[];
  statstic: Statstic;
}
export interface Artist {
  artist: string;
  songs: Song[];
  statstic: Statstic;
}
export interface Genre {
  genre: string;
  songs: Song[];
  statstic: Statstic;
}
export type AllSongs = Songs;
export type AllAlbums = Album[];
export type AllArtists = Artist[];
export type AllGenres = Genre[];

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

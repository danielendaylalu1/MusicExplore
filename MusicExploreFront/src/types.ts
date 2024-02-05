export interface Song {
  title: string;
  artist: string;
  genre?: string;
  album?: string;
  id: string;
}
export interface AlbumDetail {
  name: string;
  artist: string;
}
export interface Album {
  album: AlbumDetail;
  songs: Song[];
}
export interface Artist {
  artist: string;
  songs: Song[];
}
export interface Genre {
  gnre: string;
  songs: Song[];
}
export type AllSongs = Song[];
export type AllAlbums = Album[];
export type AllArtists = Artist[];
export type AllGenres = Genre[];
import axios from "axios";
import {
  AllSongs,
  AllAlbums,
  AllArtists,
  AllGenres,
  Song,
  Message,
  SongForUpdate,
  SongForCreate,
} from "../types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getSongs = async (): Promise<AllSongs> => {
  // try {
  const songs = await axios.get("http://localhost:3000/songs");
  return songs.data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     return handleAxiosError(error);
  //   } else {
  //     return Promise.reject(error);
  //   }
  // }
};
export const getSong = async (id?: string): Promise<Song> => {
  const song = await axios.get(`http://localhost:3000/songs/${id}`);
  return song.data;
};
export const getAlbums = async (name: string): Promise<AllAlbums> => {
  // console.log("albums name", name);

  const albums = await axios.get(
    `http://localhost:3000/songs/albums${name !== "" ? "?name=" + name : ""}`
  );
  return albums.data;
};
export const getArtists = async (name: string): Promise<AllArtists> => {
  // console.log("artists name", name);

  const artists = await axios.get(
    `http://localhost:3000/songs/artists${name !== "" ? "?name=" + name : ""}`
  );
  return artists.data;
};
export const getGenres = async (name: string): Promise<AllGenres> => {
  // console.log("genre name", name);

  const genres = await axios.get(
    `http://localhost:3000/songs/genres${name !== "" ? "?name=" + name : ""}`
  );
  return genres.data;
};

export const create = async (newSong: SongForCreate): Promise<Song> => {
  const song = await axios.post(`http://localhost:3000/songs`, newSong, config);
  return song.data;
};

export const update = async (updatedSong: SongForUpdate): Promise<Song> => {
  const song = await axios.put(
    `http://localhost:3000/songs/${updatedSong.id}`,
    updatedSong.song,
    config
  );
  return song.data;
};
export const deleter = async (id: string): Promise<Message> => {
  const song = await axios.delete(`http://localhost:3000/songs/${id}`);
  // console.log(song);
  return song.data;
};

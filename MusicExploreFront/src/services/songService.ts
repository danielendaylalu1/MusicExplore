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

const BASE_URI = import.meta.env.VITE_BASE_URI || "http://localhost:3000/songs";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getSongs = async (): Promise<AllSongs> => {
  const songs = await axios.get(`${BASE_URI}`);
  return songs.data;
};
export const getSong = async (id?: string): Promise<Song> => {
  const song = await axios.get(`${BASE_URI}/${id}`);
  return song.data;
};
export const getAlbums = async (name: string): Promise<AllAlbums> => {
  const albums = await axios.get(
    `${BASE_URI}/albums${name !== "" ? "?name=" + name : ""}`
  );
  return albums.data;
};
export const getArtists = async (name: string): Promise<AllArtists> => {
  const artists = await axios.get(
    `${BASE_URI}/artists${name !== "" ? "?name=" + name : ""}`
  );
  return artists.data;
};
export const getGenres = async (name: string): Promise<AllGenres> => {
  const genres = await axios.get(
    `${BASE_URI}/genres${name !== "" ? "?name=" + name : ""}`
  );
  return genres.data;
};

export const create = async (newSong: SongForCreate): Promise<Song> => {
  const song = await axios.post(`${BASE_URI}`, newSong, config);
  return song.data;
};

export const update = async (updatedSong: SongForUpdate): Promise<Song> => {
  const song = await axios.put(
    `${BASE_URI}/${updatedSong.id}`,
    updatedSong.song,
    config
  );
  return song.data;
};
export const deleter = async (id: string): Promise<Message> => {
  const song = await axios.delete(`${BASE_URI}/${id}`);

  return song.data;
};

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AllSongs,
  AllAlbums,
  AllArtists,
  AllGenres,
  Song,
  songForCreate,
} from "../types";
// import { getSongs } from "../services/songService";

export interface InitialState {
  songs: AllSongs;
  artists: AllArtists;
  albums: AllAlbums;
  genres: AllGenres;
}

const initialState: InitialState = {
  songs: [],
  artists: [],
  albums: [],
  genres: [],
};

const songSlice = createSlice({
  name: "Song",
  initialState,
  reducers: {
    intializeSongsStart: (state) => state,
    intializeSongs: (state, action: PayloadAction<AllSongs>) => {
      state = { ...state, songs: action.payload };
      return state;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    intializeAlbumsStart: (state, _action: PayloadAction<string>) => state,
    intializeAlbums: (state, action: PayloadAction<AllAlbums>) => {
      state = { ...state, albums: action.payload };
      return state;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    intializeArtistsStart: (state, _action: PayloadAction<string>) => state,
    intializeArtists: (state, action: PayloadAction<AllArtists>) => {
      state = { ...state, artists: action.payload };
      return state;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    intializeGenresStart: (state, _action: PayloadAction<string>) => state,
    intializeGenres: (state, action: PayloadAction<AllGenres>) => {
      state = { ...state, genres: action.payload };
      return state;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createSongStart: (state, _action: PayloadAction<songForCreate>) => {
      // console.log(action);
      return state;
    },
    createSong: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.concat(action.payload);
      return state;
    },
    updateSongStart: (state) => state,
    updateSong: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.map((song) =>
        song.id === action.payload.id ? action.payload : song
      );
      return state;
    },
    deleteSongStart: (state) => state,
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      return state;
    },
  },
});

export const {
  intializeSongsStart,
  intializeSongs,
  intializeAlbumsStart,
  intializeAlbums,
  intializeArtistsStart,
  intializeArtists,
  intializeGenresStart,
  intializeGenres,
  createSongStart,
  createSong,
  updateSongStart,
  updateSong,
  deleteSongStart,
  deleteSong,
} = songSlice.actions;
export default songSlice.reducer;

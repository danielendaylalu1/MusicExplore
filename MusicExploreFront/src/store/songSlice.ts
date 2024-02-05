import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllSongs, AllAlbums, AllArtists, AllGenres, Song } from "../types";
// import { getSongs } from "../services/songService";

export interface IntialState {
  songs: AllSongs;
  artists: AllArtists;
  albums: AllAlbums;
  genres: AllGenres;
}

const initialState: IntialState = {
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
      state.songs = action.payload;
      return state;
    },
    intializeAlbumsStart: (state) => state,
    intializeAlbums: (state, action: PayloadAction<AllAlbums>) => {
      state.albums = action.payload;
      return state;
    },
    intializeArtistsStart: (state) => state,
    intializeArtists: (state, action: PayloadAction<AllArtists>) => {
      state.artists = action.payload;
      return state;
    },
    intializeGenresStart: (state) => state,
    intializeGenres: (state, action: PayloadAction<AllGenres>) => {
      state.genres = action.payload;
      return state;
    },
    createSong: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.concat(action.payload);
      return state;
    },
    deleteSong: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload.id);
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
} = songSlice.actions;
export default songSlice.reducer;

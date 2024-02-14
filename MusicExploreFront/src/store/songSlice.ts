import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AllSongs,
  AllAlbums,
  AllArtists,
  AllGenres,
  Song,
  SongForCreate,
  SongForUpdate,
} from "../types";
// import { getSongs } from "../services/songService";

export interface InitialState {
  songs: AllSongs;
  artists: AllArtists;
  albums: AllAlbums;
  genres: AllGenres;
}

export interface CreateSong {
  songForCreate: SongForCreate;
  route: string;
}
export interface UpdateSong {
  songForUpdate: SongForUpdate;
  route: string;
}
export interface DeleteSong {
  songId: string;
  route: string;
}

const initialState: InitialState = {
  songs: {
    songs: [],
    count: 0,
  },
  albums: {
    albums: [],
    count: 0,
  },
  artists: {
    artists: [],
    count: 0,
  },
  genres: {
    genres: [],
    count: 0,
  },
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
    createSongStart: (state, _action: PayloadAction<CreateSong>) => state,
    createSong: (state, action: PayloadAction<Song>) => {
      state.songs.songs = state.songs.songs.concat(action.payload);
      return state;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateSongStart: (state, _action: PayloadAction<UpdateSong>) => state,
    updateSong: (state, action: PayloadAction<Song>) => {
      state.songs.songs = state.songs.songs.map((song) =>
        song.id === action.payload.id ? action.payload : song
      );
      return state;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteSongStart: (state, _action: PayloadAction<DeleteSong>) => state,
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs.songs = state.songs.songs.filter(
        (song) => song.id !== action.payload
      );
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

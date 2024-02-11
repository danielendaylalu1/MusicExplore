import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song, Album, Artist, Genre } from "../types";

export interface SongTypeDisplay {
  section: string;
  song: Song;
}
export interface AlbumTypeDisplay {
  section: string;
  song: Album;
}
export interface ArtistTypeDisplay {
  section: string;
  song: Artist;
}
export interface GenreTypeDisplay {
  section: string;
  song: Genre;
}
export interface SongDisplay {
  section: string;
  song: Song | null;
  album: Album | null;
  artist: Artist | null;
  genre: Genre | null;
}

const initialState: SongDisplay = {
  section: "Song",
  song: null,
  album: null,
  artist: null,
  genre: null,
};

const songDisplaySlice = createSlice({
  name: "SongDisplay",
  initialState,
  reducers: {
    setSongTypeDisplay(state, action: PayloadAction<SongTypeDisplay>) {
      state = {
        ...state,
        section: action.payload.section,
        song: action.payload.song,
      };
      return state;
    },
    setAlbumTypeDisplay(state, action: PayloadAction<AlbumTypeDisplay>) {
      state = {
        ...state,
        section: action.payload.section,
        album: action.payload.song,
      };
      return state;
    },
    setArtistTypeDisplay(state, action: PayloadAction<ArtistTypeDisplay>) {
      state = {
        ...state,
        section: action.payload.section,
        artist: action.payload.song,
      };
      return state;
    },
    setGenreTypeDisplay(state, action: PayloadAction<GenreTypeDisplay>) {
      state = {
        ...state,
        section: action.payload.section,
        genre: action.payload.song,
      };
      return state;
    },
  },
});

export const {
  setAlbumTypeDisplay,
  setArtistTypeDisplay,
  setGenreTypeDisplay,
  setSongTypeDisplay,
} = songDisplaySlice.actions;

export default songDisplaySlice.reducer;

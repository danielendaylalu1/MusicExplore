import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song, Statistic } from "../types";

export interface SongTypeDisplay {
  section: string;
  song: Song;
}
export interface AlbumTypeDisplay {
  section: string;
  song: {
    album: {
      name: string | undefined | null;
      artist: string | undefined | null;
    };
    songs: Song[] | undefined | null;
    statistic: Statistic;
  };
}
export interface ArtistTypeDisplay {
  section: string;
  song: {
    artist: string;
    songs: Song[] | undefined;
    statistic: Statistic;
  };
}
export interface GenreTypeDisplay {
  section: string;
  song: {
    genre: string | undefined;
    songs: Song[] | undefined;
    statistic: Statistic;
  };
}
export interface SongDisplay {
  section: string;
  song: Song | null;
  album: AlbumTypeDisplay | null;
  artist: ArtistTypeDisplay | null;
  genre: GenreTypeDisplay | null;
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
      console.log(state, "state========");
      return state;
    },
    setAlbumTypeDisplay(state, action: PayloadAction<AlbumTypeDisplay>) {
      state = {
        ...state,
        section: action.payload.section,
        album: { section: action.payload.section, song: action.payload.song },
      };
      return state;
    },
    setArtistTypeDisplay(state, action: PayloadAction<ArtistTypeDisplay>) {
      state = {
        ...state,
        section: action.payload.section,
        artist: { section: action.payload.section, song: action.payload.song },
      };
      return state;
    },
    setGenreTypeDisplay(state, action: PayloadAction<GenreTypeDisplay>) {
      state = {
        ...state,
        section: action.payload.section,
        genre: { section: action.payload.section, song: action.payload.song },
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

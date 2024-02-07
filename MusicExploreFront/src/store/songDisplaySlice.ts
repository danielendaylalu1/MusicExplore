import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SongForCreate } from "../types";

const initialState: SongForCreate = {
  artist: "artist",
  album: "album",
  genre: "genre",
  title: "title",
};

const songDisplaySlice = createSlice({
  name: "SongDisplay",
  initialState,
  reducers: {
    initializeSongDisplay(state, action: PayloadAction<SongForCreate>) {
      state = action.payload;
      return state;
    },
  },
});

export const { initializeSongDisplay } = songDisplaySlice.actions;

export default songDisplaySlice.reducer;

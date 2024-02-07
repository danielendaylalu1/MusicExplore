import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { songForCreate } from "../types";

const initialState: songForCreate = {
  artist: "artist",
  album: "album",
  genre: "genre",
  title: "title",
};

const songDisplaySlice = createSlice({
  name: "SongDisplay",
  initialState,
  reducers: {
    initializeSongDisplay(state, action: PayloadAction<songForCreate>) {
      state = action.payload;
      return state;
    },
  },
});

export const { initializeSongDisplay } = songDisplaySlice.actions;

export default songDisplaySlice.reducer;

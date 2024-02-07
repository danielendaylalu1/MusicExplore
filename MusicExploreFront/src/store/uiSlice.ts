import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
  searchValue: string;
}
const initialState: UiState = {
  isLoading: false,
  searchValue: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loadingToggler(state, action: PayloadAction<boolean>) {
      state = { ...state, isLoading: action.payload };
      return state;
    },
    searchValueHandler(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state = { ...state, searchValue: action.payload };
      return state;
    },
  },
});

export const { loadingToggler, searchValueHandler } = uiSlice.actions;

export default uiSlice.reducer;

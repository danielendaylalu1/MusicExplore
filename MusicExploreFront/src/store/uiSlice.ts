import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
}
const initialState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loadingToggler(state, action: PayloadAction<boolean>) {
      state = { ...state, isLoading: action.payload };
      return state;
    },
  },
});

export const { loadingToggler } = uiSlice.actions;

export default uiSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song } from "../types";

interface UpdateForm {
  song: Song;
  type: string;
}
interface UiState {
  isLoading: boolean;
  searchValue: string;
  updateFormData: UpdateForm;
  showForm: boolean;
}
const initialState: UiState = {
  isLoading: false,
  searchValue: "",
  showForm: false,
  updateFormData: {
    song: {
      title: "",
      artist: "",
      album: "",
      genre: "",
      id: "",
    },
    type: "Create",
  },
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
      state = { ...state, searchValue: action.payload };
      return state;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUpdateFormDataStart(state, _action: PayloadAction<string>) {
      return state;
    },
    setUpdateFormData(state, action: PayloadAction<UpdateForm>) {
      state = { ...state, updateFormData: action.payload };
      return state;
    },
    resetUpdateFormData(state) {
      state = {
        ...state,
        updateFormData: {
          song: {
            title: "",
            artist: "",
            album: "",
            genre: "",
            id: "",
          },
          type: "Create",
        },
      };
      return state;
    },
    setFormShow(state, action: PayloadAction<boolean>) {
      state = { ...state, showForm: action.payload };
      return state;
    },
  },
});

export const {
  loadingToggler,
  searchValueHandler,
  setFormShow,
  setUpdateFormDataStart,
  setUpdateFormData,
  resetUpdateFormData,
} = uiSlice.actions;

export default uiSlice.reducer;

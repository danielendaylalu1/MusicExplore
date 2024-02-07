import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SongForUpdate } from "../types";

interface UpdateForm {
  data: SongForUpdate;
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
    data: {
      song: {
        title: "",
        artist: "",
        album: "",
        genre: "",
      },
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
      console.log(action.payload);
      state = { ...state, searchValue: action.payload };
      return state;
    },
    setUpdateFormData(state, action: PayloadAction<UpdateForm>) {
      state = { ...state, updateFormData: action.payload };
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
  setUpdateFormData,
} = uiSlice.actions;

export default uiSlice.reducer;

import { PayloadAction } from "@reduxjs/toolkit";

import {
  create,
  deleter,
  getAlbums,
  getArtists,
  getGenres,
  getSong,
  getSongs,
  update,
} from "../services/songService";
import {
  AllAlbums,
  AllArtists,
  AllGenres,
  AllSongs,
  AxiosErrorWithResponse,
  Message,
  Song,
  SongForCreate,
  SongForUpdate,
} from "../types";
import {
  intializeSongs,
  intializeAlbums,
  intializeArtists,
  intializeGenres,
  intializeSongsStart,
  intializeArtistsStart,
  intializeAlbumsStart,
  intializeGenresStart,
  createSong,
  deleteSong,
  updateSong,
  createSongStart,
  updateSongStart,
  deleteSongStart,
} from "./songSlice";

import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import {
  setAlbumTypeDisplay,
  setArtistTypeDisplay,
  setSongTypeDisplay,
  setGenreTypeDisplay,
} from "./songDisplaySlice";
import {
  loadingToggler,
  resetUpdateFormData,
  searchValueHandler,
  setStatus,
  setUpdateFormData,
  setUpdateFormDataStart,
} from "./uiSlice";

// songFetcher saga -------- songFetcher saga
function* songsGeterSaga() {
  try {
    yield put(setStatus({ error: false, message: "" }));
    yield put(searchValueHandler(""));
    yield put(loadingToggler(true));
    const songs: AllSongs = yield call(getSongs);
    yield put(intializeSongs(songs));
    yield put(loadingToggler(false));
    yield put(
      setSongTypeDisplay({
        section: "Song",
        song: songs[0],
      })
    );
  } catch (error: unknown) {
    console.log("new error log", error);
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 404:
            // Not Found error
            console.log(
              "Not Found error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          // Unknown error
          default:
            console.log(
              "Unknown error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      console.log("Unexpected error-->", error);
      // const message:string = error.message as string
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* songsSaga() {
  yield takeEvery(intializeSongsStart.type, songsGeterSaga);
}

// singlSongFetcher saga -------- songFetcher saga
function* singleSongGeterSaga(action: PayloadAction<string>) {
  try {
    yield put(setStatus({ error: false, message: "" }));
    yield put(loadingToggler(true));
    const song: Song = yield call(() => getSong(action.payload));
    // console.log("dipatch runs");
    yield put(
      setUpdateFormData({
        song,
        type: "Update",
      })
    );
    yield put(loadingToggler(false));
  } catch (error: unknown) {
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 404:
            // Not Found error
            console.log(
              "Not Found error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          // Unknown error
          default:
            console.log(
              "Unknown error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      console.log("Unexpected error-->", error);
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* singleSongSaga() {
  yield takeEvery(setUpdateFormDataStart.type, singleSongGeterSaga);
}

// songCreater saga -------- songCreater saga
function* songCreatorSaga(action: PayloadAction<SongForCreate>) {
  try {
    yield put(setStatus({ error: false, message: "" }));
    yield put(loadingToggler(true));
    const song: Song = yield call(() => create(action.payload));
    // console.log("songs data", song);
    yield put(createSong(song));

    yield put(loadingToggler(false));
    yield put(
      setStatus({
        error: false,
        message: "song created succesfully",
      })
    );

    yield put(resetUpdateFormData());
  } catch (error: unknown) {
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 400: {
            const errorMessage = axiosError.response.data.error.join(", ");
            console.log("Validation error message-->", errorMessage);
            yield put(setStatus({ error: true, message: errorMessage }));
            break;
          }
          // Validation error

          case 404:
            // Not Found error
            console.log(
              "Not Found error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            console.log(
              "Unknown error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      console.log("Unexpected error-->", error);
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* songCreateSaga() {
  yield takeEvery(createSongStart.type, songCreatorSaga);
}

// songUpdater saga -------- songUpdater saga
function* songUpdaterSaga(action: PayloadAction<SongForUpdate>) {
  try {
    yield put(setStatus({ error: false, message: "" }));
    yield put(loadingToggler(true));
    const song: Song = yield call(() => update(action.payload));
    // console.log("songs data", song);
    yield put(updateSong(song));
    yield put(loadingToggler(false));
    yield put(
      setStatus({ error: false, message: "Song updated successfully" })
    );
    yield put(resetUpdateFormData());
  } catch (error: unknown) {
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 400: {
            const errorMessage = axiosError.response.data.error.join(", ");
            console.log("Validation error message-->", errorMessage);
            yield put(setStatus({ error: true, message: errorMessage }));
            break;
          }
          // Validation error

          case 404:
            // Not Found error
            console.log(
              "Not Found error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            console.log(
              "Unknown error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      console.log("Unexpected error-->", error);
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* songUpdateSaga() {
  yield takeEvery(updateSongStart.type, songUpdaterSaga);
}

// songDeleter saga -------- songDeleter saga
function* songDeletorSaga(action: PayloadAction<string>) {
  try {
    yield put(setStatus({ error: false, message: "" }));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const song: Message = yield call(() => deleter(action.payload));
    console.log("songs data", song, action.payload);
    yield put(deleteSong(action.payload));
  } catch (error: unknown) {
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 404:
            // Not Found error
            console.log(
              "Not Found error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            console.log(
              "Unknown error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      console.log("Unexpected error-->", error);
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* songDeleteSaga() {
  yield takeEvery(deleteSongStart.type, songDeletorSaga);
}

// albumFetcher saga -------- albumFetcher saga
function* albumGeterSaga(action: PayloadAction<string>) {
  try {
    yield put(setStatus({ error: false, message: "" }));
    yield put(searchValueHandler(""));
    yield put(loadingToggler(true));
    const albums: AllAlbums = yield call(() => getAlbums(action.payload));
    // console.log("albums data", albums);
    yield put(intializeAlbums(albums));
    yield put(loadingToggler(false));
    yield put(
      setAlbumTypeDisplay({
        section: "Album",
        song: albums[0],
      })
    );
  } catch (error: unknown) {
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 404:
            // Not Found error
            console.log(
              "Not Found error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            console.log(
              "Unknown error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      console.log("Unexpected error-->", error);
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* albumsSaga() {
  yield takeEvery(intializeAlbumsStart.type, albumGeterSaga);
}

// artistFetcher saga -------- artistFetcher saga
function* artistsGeterSaga(action: PayloadAction<string>) {
  try {
    yield put(setStatus({ error: false, message: "" }));
    yield put(searchValueHandler(""));
    yield put(loadingToggler(true));
    const artists: AllArtists = yield call(() => getArtists(action.payload));
    // console.log("genres data", artists);
    yield put(intializeArtists(artists));
    yield put(loadingToggler(false));
    yield put(
      setArtistTypeDisplay({
        section: "Artist",
        song: artists[0],
      })
    );
  } catch (error: unknown) {
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 404:
            // Not Found error
            console.log(
              "Not Found error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            console.log(
              "Unknown error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      console.log("Unexpected error-->", error);
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* artistsSaga() {
  yield takeEvery(intializeArtistsStart.type, artistsGeterSaga);
}

// genreFetcher saga -------- genreFetcher saga
function* genresGeterSaga(action: PayloadAction<string>) {
  try {
    yield put(setStatus({ error: false, message: "" }));
    yield put(searchValueHandler(""));
    yield put(loadingToggler(true));
    const genres: AllGenres = yield call(() => getGenres(action.payload));
    // console.log("genres data", genres);
    yield put(intializeGenres(genres));
    yield put(loadingToggler(false));
    yield put(
      setGenreTypeDisplay({
        section: "Genre",
        song: genres[0],
      })
    );
  } catch (error: unknown) {
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 404:
            // Not Found error
            console.log(
              "Not Found error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            console.log(
              "Unknown error message-->",
              axiosError.response.data.error
            );
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      console.log("Unexpected error-->", error);
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* genresSaga() {
  yield takeEvery(intializeGenresStart.type, genresGeterSaga);
}

//  Root Saga --------  Root Saga
export function* rootSaga() {
  yield all([
    fork(songsSaga),
    fork(albumsSaga),
    fork(artistsSaga),
    fork(genresSaga),
    fork(songCreateSaga),
    fork(songDeleteSaga),
    fork(songUpdateSaga),
    fork(singleSongSaga),
  ]);
}

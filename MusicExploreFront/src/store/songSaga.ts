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
  Song,
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
  CreateSong,
  UpdateSong,
  DeleteSong,
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
        song: songs.songs[0],
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

            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          // Unknown error
          default:
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
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

            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          // Unknown error
          default:
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* singleSongSaga() {
  yield takeEvery(setUpdateFormDataStart.type, singleSongGeterSaga);
}

// songCreater saga -------- songCreater saga
function* songCreatorSaga(action: PayloadAction<CreateSong>) {
  try {
    // yield put(setStatus({ error: false, message: "" }));
    const song: Song = yield call(() => create(action.payload.songForCreate));
    yield put(createSong(song));
    if (action.payload.route === "albums") {
      yield put(intializeAlbumsStart(""));
    } else if (action.payload.route === "artists") {
      yield put(intializeArtistsStart(""));
    } else if (action.payload.route === "genres") {
      yield put(intializeGenresStart(""));
    }
    // yield put(loadingToggler(false));
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

            yield put(setStatus({ error: true, message: errorMessage }));
            break;
          }
          // Validation error

          case 404:
            // Not Found error

            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* songCreateSaga() {
  yield takeEvery(createSongStart.type, songCreatorSaga);
}

// songUpdater saga -------- songUpdater saga
function* songUpdaterSaga(action: PayloadAction<UpdateSong>) {
  try {
    // yield put(setStatus({ error: false, message: "" }));
    // yield put(loadingToggler(true));
    const song: Song = yield call(() => update(action.payload.songForUpdate));

    yield put(updateSong(song));
    if (action.payload.route === "albums") {
      yield put(intializeAlbumsStart(""));
    } else if (action.payload.route === "artists") {
      yield put(intializeArtistsStart(""));
    } else if (action.payload.route === "genres") {
      yield put(intializeGenresStart(""));
    }
    // yield put(loadingToggler(false));
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

            yield put(setStatus({ error: true, message: errorMessage }));
            break;
          }
          // Validation error

          case 404:
            // Not Found error

            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
      yield put(setStatus({ error: true, message: "Network Error" }));
    }
  }
}

export function* songUpdateSaga() {
  yield takeEvery(updateSongStart.type, songUpdaterSaga);
}

// songDeleter saga -------- songDeleter saga
function* songDeletorSaga(action: PayloadAction<DeleteSong>) {
  try {
    // yield put(setStatus({ error: false, message: "" }));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    yield call(() => deleter(action.payload.songId));
    yield put(deleteSong(action.payload.songId));
    if (action.payload.route === "albums") {
      yield put(intializeAlbumsStart(""));
    } else if (action.payload.route === "artists") {
      yield put(intializeArtistsStart(""));
    } else if (action.payload.route === "genres") {
      yield put(intializeGenresStart(""));
    }
  } catch (error: unknown) {
    yield put(loadingToggler(false));

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as AxiosErrorWithResponse;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 404:
            // Not Found error

            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
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
    yield put(intializeAlbums(albums));
    yield put(loadingToggler(false));
    yield put(
      setAlbumTypeDisplay({
        section: "Album",
        song: albums.albums[0],
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

            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
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

    yield put(intializeArtists(artists));
    yield put(loadingToggler(false));
    yield put(
      setArtistTypeDisplay({
        section: "Artist",
        song: artists.artists[0],
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

            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
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
    yield put(intializeGenres(genres));
    yield put(loadingToggler(false));
    yield put(
      setGenreTypeDisplay({
        section: "Genre",
        song: genres.genres[0],
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
            yield put(
              setStatus({
                error: true,
                message: "The requested resource could not be found",
              })
            );
            break;
          default:
            yield put(
              setStatus({ error: true, message: "An unknown error occurred" })
            );
        }
      }
    } else {
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

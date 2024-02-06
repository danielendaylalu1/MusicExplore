import { PayloadAction } from "@reduxjs/toolkit";
import {
  create,
  deleter,
  getAlbums,
  getArtists,
  getGenres,
  getSongs,
  update,
} from "../services/songService";
import {
  AllAlbums,
  AllArtists,
  AllGenres,
  AllSongs,
  Message,
  Song,
  songForCreate,
  songForUpdate,
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
} from "./songSlice";

import { put, call, takeEvery, all, fork } from "redux-saga/effects";

// songFetcher saga -------- songFetcher saga
function* songsGeterSaga() {
  try {
    const songs: AllSongs = yield call(getSongs);
    console.log("songs data", songs);
    yield put(intializeSongs(songs));
  } catch (e) {
    console.error(e);
  }
}

export function* songsSaga() {
  yield takeEvery(intializeSongsStart.type, songsGeterSaga);
}

// songCreater saga -------- songCreater saga
function* songCreaterSaga(action: PayloadAction<songForCreate>) {
  try {
    const song: Song = yield call(() => create(action.payload));
    console.log("songs data", song);
    yield put(createSong(song));
  } catch (e) {
    console.error(e);
  }
}

export function* songCreateSaga() {
  yield takeEvery(intializeSongsStart.type, songCreaterSaga);
}

// songUpdater saga -------- songUpdater saga
function* songUpdaterSaga(action: PayloadAction<songForUpdate>) {
  try {
    const song: Song = yield call(() => update(action.payload));
    console.log("songs data", song);
    yield put(updateSong(song));
  } catch (e) {
    console.error(e);
  }
}

export function* songUpdateSaga() {
  yield takeEvery(intializeSongsStart.type, songUpdaterSaga);
}

// songDeleter saga -------- songDeleter saga
function* songDeleterSaga(action: PayloadAction<string>) {
  try {
    const song: Message = yield call(() => deleter(action.payload));
    console.log("songs data", song);
    yield put(deleteSong(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* songDeleteSaga() {
  yield takeEvery(intializeSongsStart.type, songDeleterSaga);
}

// albumFetcher saga -------- albumFetcher saga
function* albumGeterSaga(action: PayloadAction<string>) {
  try {
    const albums: AllAlbums = yield call(() => getAlbums(action.payload));
    console.log("albums data", albums);
    yield put(intializeAlbums(albums));
  } catch (e) {
    console.error(e);
  }
}

export function* albumsSaga() {
  yield takeEvery(intializeAlbumsStart.type, albumGeterSaga);
}

// artistFetcher saga -------- artistFetcher saga
function* artistsGeterSaga(action: PayloadAction<string>) {
  try {
    const artists: AllArtists = yield call(() => getArtists(action.payload));
    console.log("genres data", artists);
    yield put(intializeArtists(artists));
  } catch (e) {
    console.error(e);
  }
}

export function* artistsSaga() {
  yield takeEvery(intializeArtistsStart.type, artistsGeterSaga);
}

// genreFetcher saga -------- genreFetcher saga
function* genresGeterSaga(action: PayloadAction<string>) {
  try {
    const genres: AllGenres = yield call(() => getGenres(action.payload));
    console.log("genres data", genres);
    yield put(intializeGenres(genres));
  } catch (e) {
    console.error(e);
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
  ]);
}

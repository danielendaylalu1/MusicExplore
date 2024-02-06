import { PayloadAction } from "@reduxjs/toolkit";
import {
  create,
  getAlbums,
  getArtists,
  getGenres,
  getSongs,
} from "../services/songService";
import { AllAlbums, AllArtists, AllGenres, AllSongs, Song } from "../types";
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
} from "./songSlice";

import { put, call, takeEvery, all, fork } from "redux-saga/effects";

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

function* songCreaterSaga(action: PayloadAction<Song>) {
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

function* songUpdaterSaga(action: PayloadAction<Song>) {
  try {
    const song: Song = yield call(() => create(action.payload));
    console.log("songs data", song);
    yield put(createSong(song));
  } catch (e) {
    console.error(e);
  }
}

export function* songUpdateSaga() {
  yield takeEvery(intializeSongsStart.type, songUpdaterSaga);
}

function* songDeleterSaga(action: PayloadAction<Song>) {
  try {
    const song: Song = yield call(() => create(action.payload));
    console.log("songs data", song);
    yield put(createSong(song));
  } catch (e) {
    console.error(e);
  }
}

export function* songDeleteSaga() {
  yield takeEvery(intializeSongsStart.type, songDeleterSaga);
}

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

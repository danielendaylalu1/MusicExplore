import {
  getAlbums,
  getArtists,
  getGenres,
  getSongs,
} from "../services/songService";
import { AllAlbums, AllArtists, AllGenres, AllSongs } from "../types";
import {
  intializeSongs,
  intializeAlbums,
  intializeArtists,
  intializeGenres,
  intializeSongsStart,
} from "./songSlice";

import { put, call, takeEvery } from "redux-saga/effects";

function* songsGeterSaga() {
  try {
    const songs: AllSongs = yield call(getSongs);
    yield put(intializeSongs(songs));
  } catch (e) {
    console.error(e);
  }
}

export function* songsSaga() {
  yield takeEvery(intializeSongsStart.type, songsGeterSaga);
}

function* albumGeterSaga() {
  try {
    const albums: AllAlbums = yield call(() => getAlbums(""));
    yield put(intializeAlbums(albums));
  } catch (e) {
    console.error(e);
  }
}

export function* albumSaga() {
  yield takeEvery(intializeSongsStart.type, albumGeterSaga);
}

function* artistsGeterSaga() {
  try {
    const artists: AllArtists = yield call(() => getArtists(""));
    yield put(intializeArtists(artists));
  } catch (e) {
    console.error(e);
  }
}

export function* artistsSaga() {
  yield takeEvery(intializeSongsStart.type, artistsGeterSaga);
}
function* genresGeterSaga() {
  try {
    const genres: AllGenres = yield call(() => getGenres(""));
    yield put(intializeGenres(genres));
  } catch (e) {
    console.error(e);
  }
}

export function* genresSaga() {
  yield takeEvery(intializeSongsStart.type, genresGeterSaga);
}

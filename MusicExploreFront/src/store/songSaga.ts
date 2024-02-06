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
  intializeArtistsStart,
  intializeAlbumsStart,
  intializeGenresStart,
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

function* albumGeterSaga() {
  try {
    const albums: AllAlbums = yield call(() => getAlbums(""));
    console.log("albums data", albums);
    yield put(intializeAlbums(albums));
  } catch (e) {
    console.error(e);
  }
}

export function* albumsSaga() {
  yield takeEvery(intializeAlbumsStart.type, albumGeterSaga);
}

function* artistsGeterSaga() {
  try {
    const artists: AllArtists = yield call(() => getArtists(""));
    console.log("genres data", artists);
    yield put(intializeArtists(artists));
  } catch (e) {
    console.error(e);
  }
}

export function* artistsSaga() {
  yield takeEvery(intializeArtistsStart.type, artistsGeterSaga);
}

function* genresGeterSaga() {
  try {
    const genres: AllGenres = yield call(() => getGenres(""));
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
  ]);
}

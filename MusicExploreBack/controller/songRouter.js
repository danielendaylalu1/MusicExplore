const express = require("express");
// const mongoose = require("mongoose");
const Song = require("../models/Song");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const songs = await Song.find({});
    console.log(songs);
    return res.status(200).json(songs);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newSong = new Song(data);
    const song = await newSong.save();
    console.log(song);
    res.status(201).json(song);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

router.get("/albums", async (req, res) => {
  try {
    const albums = await Song.distinct("album", { album: { $ne: "" } });

    return res.status(200).json(albums);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});
router.get("/genres", async (req, res) => {
  try {
    const genres = await Song.distinct("genre");
    return res.status(200).json(genres);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});
router.get("/artists", async (req, res) => {
  try {
    const artists = await Song.distinct("artist");
    return res.status(200).json(artists);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

module.exports = router;

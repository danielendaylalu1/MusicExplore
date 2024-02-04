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
    res.status(500).json({
      error: error.message,
    });
  }
});
router.get("/albums", async (req, res) => {
  try {
    let { name } = req.query;
    if (name === undefined) {
      return res.status(400).json({
        error: "Query parametr 'name' is required",
      });
    }
    let matchingCondition = name
      ? { $match: { album: { $regex: new RegExp(`^${name}$`, "i") } } }
      : { $match: { album: { $ne: "" } } };
    let albums = await Song.aggregate([
      matchingCondition,
      {
        $group: {
          _id: { album: "$album", artist: "$artist" },
          songs: { $push: "$$ROOT" },
        },
      },
    ]);

    albums = albums.map((album) => ({
      album: album._id,
      songs: album.songs,
    }));

    return res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/genres", async (req, res) => {
  try {
    let { name } = req.query;
    if (name === undefined) {
      return res.status(400).json({
        error: "Query parametr 'name' is required",
      });
    }
    let matchingCondition = name
      ? { $match: { genre: { $regex: new RegExp(`^${name}$`, "i") } } }
      : { $match: { genre: { $ne: "" } } };
    let genres = await Song.aggregate([
      matchingCondition,
      { $group: { _id: "$genre", songs: { $push: "$$ROOT" } } },
    ]);
    genres = genres.map((genre) => ({ genre: genre._id, songs: genre.songs }));
    return res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.get("/artists", async (req, res) => {
  try {
    let { name } = req.query;
    if (name === undefined) {
      return res.status(400).json({
        error: "Query parametr 'name' is required",
      });
    }
    console.log(name);
    let matchingCondition = name
      ? { $match: { artist: { $regex: new RegExp(`^${name}$`, "i") } } }
      : { $match: { artist: { $ne: "" } } };
    let artists = await Song.aggregate([
      matchingCondition,
      { $group: { _id: "$artist", songs: { $push: "$$ROOT" } } },
    ]);
    artists = artists.map((artist) => ({
      artist: artist._id,
      songs: artist.songs,
    }));

    return res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const song = await Song.findById(id);
    console.log(song);
    return res.status(200).json(song);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newSong = new Song(data);
    const song = await newSong.save(data);
    console.log(song);
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedsong = await Song.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      context: "query",
    });
    console.log(updatedsong);
    res.status(201).json(updatedsong);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Song deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;

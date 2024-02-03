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
router.get("/albums", async (req, res) => {
  try {
    let albums = await Song.aggregate([
      { $match: { album: { $ne: "" } } },
      { $group: { _id: "$album", songs: { $push: "$$ROOT" } } },
    ]);

    albums = albums.map((album) => ({
      album: album._id,
      songs: album.songs,
    }));

    return res.status(200).json(albums);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

router.get("/genres", async (req, res) => {
  try {
    let genres = await Song.aggregate([
      { $match: { genre: { $ne: "" } } },
      { $group: { _id: "$genre", songs: { $push: "$$ROOT" } } },
    ]);
    genres = genres.map((genre) => ({ genre: genre._id, songs: genre.songs }));
    return res.status(200).json(genres);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});
router.get("/artists", async (req, res) => {
  try {
    let artists = await Song.aggregate([
      { $group: { _id: "$artist", songs: { $push: "$$ROOT" } } },
    ]);
    artists = artists.map((artist) => ({
      artist: artist._id,
      songs: artist.songs,
    }));

    return res.status(200).json(artists);
  } catch (error) {
    res.status(404).json({
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
    res.status(404).json({
      error: error.message,
    });
  }
});
router.get("/albums/:slug", async (req, res) => {
  try {
    let { slug } = req.params;

    console.log(slug);
    let albums = await Song.aggregate([
      { $match: { album: { $regex: new RegExp(`^${slug}$`, "i") } } },
      {
        $group: {
          _id: { name: "$album", artist: "$artist" },
          songs: { $push: "$$ROOT" },
        },
      },
    ]);

    if (albums.length > 0) {
      albums = albums.map((album) => ({
        album: album._id,
        songs: album.songs,
      }));

      return res.status(200).json(albums);
    }

    return res.status(200).json(albums);

    // return res.status(200).json([]);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

router.get("/artists/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const artists = await Song.aggregate([
      { $match: { artist: { $regex: new RegExp(`^${slug}$`, "i") } } },
      { $group: { _id: "$artist", songs: { $push: "$$ROOT" } } },
    ]);
    if (artists.length > 0) {
      const artist = {
        artist: artists[0]._id,
        songs: artists[0].songs,
      };
      return res.status(200).json(artist);
    }
    return res.status(200).json(artists);
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
});

router.get("/genres/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const genres = await Song.aggregate([
      { $match: { genre: { $regex: new RegExp(`^${slug}$`, "i") } } },
      { $group: { _id: "$genre", songs: { $push: "$$ROOT" } } },
    ]);
    if (genres.length > 0) {
      const genre = {
        gener: genres[0]._id,
        songs: genres[0].songs,
      };
      return res.status(200).json(genre);
    }
    return res.status(200).json(genres);
  } catch (error) {
    return res.status(404).json({
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
    res.status(404).json({
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
    res.status(404).json({
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
    res.status(404).json({
      error: error.message,
    });
  }
});

module.exports = router;

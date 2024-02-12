const express = require("express");
const mongoose = require("mongoose");
const Song = require("../models/Song");

const router = express.Router();

// all songs GET api
router.get("/", async (_req, res, next) => {
  try {
    const songs = await Song.find({});
    const songsCount = await Song.countDocuments();

    return res.status(200).json({
      count: songsCount,
      songs,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// all albums GET api
router.get("/albums", async (req, res, next) => {
  try {
    let { name } = req.query;

    if (name === undefined && Object.keys(req.query).length > 0) {
      return res.status(400).json({
        error: "Query parametr 'name' is required",
      });
    }
    let matchingCondition = name
      ? {
          $match: {
            $or: [
              {
                album: {
                  $regex: new RegExp(`^${name.replace(/\s+/g, "")}$`, "i"),
                },
              },
              { album: { $regex: new RegExp(`^${name}$`, "i") } },
            ],
          },
        }
      : { $match: { album: { $ne: "" } } };
    let albums = await Song.aggregate([
      matchingCondition,
      {
        $group: {
          _id: {
            name: "$album",
            artist: "$artist",
          },
          songs: {
            $push: {
              id: "$_id",
              title: "$title",
              album: "$album",
              artist: "$artist",
              genre: "$genre",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          album: "$_id",
          songs: 1,
          statstic: { songCount: { $size: "$songs" } },
        },
      },
    ]);
    const songsCount = await Song.countDocuments({ album: { $ne: "" } });
    console.log(albums);

    return res.status(200).json({
      count: songsCount,
      albums,
    });
  } catch (error) {
    next(error);
  }
});
// all genres GET api
router.get("/genres", async (req, res, next) => {
  try {
    let { name } = req.query;
    // console.log(name);
    const statstic = await Song.find({ genre: { $ne: "" } }).distinct("genre");
    console.log("genre statstic", statstic);
    if (name === undefined && Object.keys(req.query).length > 0) {
      return res.status(400).json({
        error: "Query parametr 'name' is required",
      });
    }
    let matchingCondition = name
      ? { $match: { genre: { $regex: new RegExp(`^${name}$`, "i") } } }
      : { $match: { genre: { $ne: "" } } };
    let genres = await Song.aggregate([
      matchingCondition,
      {
        $group: {
          _id: "$genre",
          songs: {
            $push: {
              id: "$_id",
              title: "$title",
              album: "$album",
              artist: "$artist",
              genre: "$genre",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          genre: "$_id",
          songs: 1,
          statstic: { songCount: { $size: "$songs" } },
        },
      },
    ]);
    const songsCount = await Song.countDocuments({ genre: { $ne: "" } });

    return res.status(200).json({
      count: songsCount,
      genres,
    });
  } catch (error) {
    next(error);
  }
});
// all artists GET api
router.get("/artists", async (req, res, next) => {
  try {
    let { name } = req.query;

    // console.log("artist statstic", statstic);
    if (name === undefined && Object.keys(req.query).length > 0) {
      return res.status(400).json({
        error: "Query parametr 'name' is required",
      });
    }
    // console.log(name);
    let matchingCondition = name
      ? { $match: { artist: { $regex: new RegExp(`^${name}$`, "i") } } }
      : { $match: { artist: { $ne: "" } } };
    let artists = await Song.aggregate([
      matchingCondition,
      {
        $group: {
          _id: "$artist",
          songs: {
            $push: {
              id: "$_id",
              title: "$title",
              album: "$album",
              artist: "$artist",
              genre: "$genre",
            },
          },
          albums: {
            $addToSet: {
              $cond: [{ $ne: ["$album", ""] }, "$album", "$$REMOVE"],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          artist: "$_id",
          songs: 1,
          // albums: 0,
          statstic: {
            songCount: { $size: "$songs" },
            albumCount: { $size: "$albums" },
          },
        },
      },
    ]);
    const songsCount = await Song.countDocuments({ artist: { $ne: "" } });

    return res.status(200).json({
      count: songsCount,
      artists,
    });
  } catch (error) {
    next(error);
  }
});
// single songs GET api
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const song = await Song.findById(id);
    // console.log(song);
    return res.status(200).json(song);
  } catch (error) {
    next(error);
  }
});
// song POST api
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(data);
    const newSong = new Song(data);
    const song = await newSong.save(data);
    // console.log(song);
    res.status(201).json(song);
  } catch (error) {
    next(error);
  }
});
// song PUT api
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedsong = await Song.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      context: "query",
    });
    // console.log(updatedsong);
    res.status(201).json(updatedsong);
  } catch (error) {
    next(error);
  }
});
// songs delete api
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await Song.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Song deleted successfully",
    });
  } catch (error) {
    next(error);
    // res.status(500).json({
    //   error: error.message,
    // });
  }
});

module.exports = router;

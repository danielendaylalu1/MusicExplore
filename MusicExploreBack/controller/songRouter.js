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
          statistic: { songCount: { $size: "$songs" } },
        },
      },
    ]);
    const songsCount = await Song.distinct("album");

    return res.status(200).json({
      count: songsCount.length,
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

    const statstic = await Song.find({ genre: { $ne: "" } }).distinct("genre");

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
          statistic: { songCount: { $size: "$songs" } },
        },
      },
    ]);
    const songsCount = await Song.distinct("genre");

    return res.status(200).json({
      count: songsCount.length,
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

    if (name === undefined && Object.keys(req.query).length > 0) {
      return res.status(400).json({
        error: "Query parametr 'name' is required",
      });
    }

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
          statistic: {
            songCount: { $size: "$songs" },
            albumCount: { $size: "$albums" },
          },
        },
      },
    ]);
    const songsCount = await Song.distinct("artist");

    return res.status(200).json({
      count: songsCount.length,
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

    const song = await Song.findById(id);

    return res.status(200).json(song);
  } catch (error) {
    next(error);
  }
});
// song POST api
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;

    const newSong = new Song(data);
    const song = await newSong.save(data);

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
  }
});

module.exports = router;

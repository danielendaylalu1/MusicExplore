const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  artist: {
    type: String,
    required: [true, "Artist field is required"],
  },
  genre: {
    type: String,
    required: [true, "Genre field is required"],
  },
  albumTitle: {
    type: String,
    required: [true, "Title is required"],
  },
  album: {
    type: String,
  },
});

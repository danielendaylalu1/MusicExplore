const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
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
  album: {
    type: String,
  },
});

songSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    if (returnedObject._id) {
      returnedObject.id = returnedObject._id.toString();
    }
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;

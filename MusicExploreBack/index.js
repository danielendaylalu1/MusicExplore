require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const songRouter = require("./controller/songRouter");
const app = express();

app.use(cors());
app.use(express.json());

const errorHandler = (err, _req, res, _next) => {
  res.status(500).json({
    message: "An unexpected error occurred",
    error: err.message,
  });
};

(async () => {
  try {
    const url = process.env.DATABASE_URL;
    await mongoose.connect(url);
    console.log("connected to database");
  } catch (error) {
    console.log(error.message);
  }
})();

app.use("/songs", songRouter);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});

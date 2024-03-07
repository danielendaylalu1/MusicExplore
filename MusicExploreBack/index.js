require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const songRouter = require("./controller/songRouter");
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.setTimeout(20000);
  res.setTimeout(20000);
  next();
});

const errorHandler = (err, _req, res, _next) => {
  if (err.name === "ValidationError") {
    const errorMessages = Object.values(err.errors).map((e) => e.message);
    res.status(400).json({
      message: "Validation Error",
      error: errorMessages,
    });
  }
  if (err instanceof mongoose.MongooseError) {
    res.status(500).json({
      message: "Faild to fetch data",
      error: err.message,
    });
  } else {
    res.status(500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
  }
};

(async () => {
  try {
    let url = "mongodb://localhost:27017/songs";

    if (process.env.DATABASE_URL) {
      url = process.env.DATABASE_URL;
    }
    if (process.env.DOCKER_COMPOSE) {
      url = "mongodb://mongo:27017/songs";
    }

    await mongoose.connect(url);
    console.log("connected to database");
  } catch (error) {
    console.log(error.message);
  }
})();

app.use("/songs", songRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});

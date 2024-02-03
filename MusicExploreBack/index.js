require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const songRouter = require("./controller/songRouter");
const app = express();

app.use(cors());
app.use(express.json());

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

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});

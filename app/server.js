const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fileRouter = require("./routes/file");
const cors = require("cors");

const app = express();
const { MONGO_URL } = require("../config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/files", fileRouter);

const connectDB = () =>
  mongoose
    .connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log(err.message);
    });

app.get("/", (req, res) => {
  res.json({ alive: true });
});

module.exports = { app, connectDB };

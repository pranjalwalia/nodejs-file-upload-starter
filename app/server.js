const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const fileRouter = require("./routes/file");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/files", fileRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the File Upload Starter ✨" });
});

app.get("/health", (req, res) => {
  res.json({ alive: true });
});

module.exports = app;

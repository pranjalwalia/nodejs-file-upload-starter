const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const fileRouter = require("./routes/file");

// initialize middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// inititialize routes
app.use("/files", fileRouter);

// welcome
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the File Upload Starter ✨" });
});

// remote health check status of server when deployed to platforms
app.get("/health", (req, res) => {
  res.json({ alive: true });
});

module.exports = app;

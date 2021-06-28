const mongoose = require("mongoose");
const { MONGO_URL } = require("../../config");

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

module.exports = connectDB;

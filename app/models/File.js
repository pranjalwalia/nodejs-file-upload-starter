const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Meta Data Associated with a file stored in mongo
const fileSchema = new Schema(
  {
    filename: { type: String, required: true },
    path: { type: String, required: true },
    uuid: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);

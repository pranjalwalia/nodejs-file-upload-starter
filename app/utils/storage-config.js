const multer = require("multer");
const path = require("path");

/**
 * Set The Storage Engine on Host Machine
 *
 * 1. specify path of storing uploaded files via `destination`
 * 2. Assign unique filename logic inside field `filename`
 * */
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

/**
 * Set Upload Configs
 *
 * 1. supports upload of a single file per request
 * 2. file size <= 100 mb
 * 3. upload via POST method
 * 4. Accepts request format `Content-Type: multipart/form-data`
 * 5. Important: field on multipart form must be a single field named "file"
 * */
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 * 100 }, //set limit to 100 mb
}).single("file");

module.exports = { upload };

const File = require("../models/File");
const { v4: uuidv4 } = require("uuid");

const fileUpload = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    const file = new File({
      filename: req.file.filename,
      uuid: uuidv4(),
      path: req.file.path,
      size: req.file.size,
    });
    try {
      const response = await file.save();
      res.json({
        file: `${response}`,
      });
    } catch (err) {
      return res.json({ error: err.message });
    }
  });
};

const { upload } = require("../utils/storage-config");

module.exports = fileUpload;

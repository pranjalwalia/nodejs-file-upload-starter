const router = require("express").Router();
const fileUploadHandler = require("../controllers/fileUpload");

router.post("/", fileUploadHandler);

module.exports = router;

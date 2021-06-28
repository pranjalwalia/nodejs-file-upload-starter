/**
 * Load Environment vars and export all config variables from this module
 * */

const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const MONGO_URL = process.env.MONGO_URL;

module.exports = { MONGO_URL };

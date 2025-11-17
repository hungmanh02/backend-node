const express = require("express");
const router = express.Router();
const { getHomePage, getImages } = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/images", getImages);
module.exports = router;

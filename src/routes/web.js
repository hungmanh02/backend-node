const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getImages,
  postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/images", getImages);
router.post("/create-user", postCreateUser);
module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getImages,
  postCreateUser,
  getCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/images", getImages);
router.get("/get-add", getCreateUser);
router.post("/create-user", postCreateUser);
module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getImages,
  postCreateUser,
  getCreateUser,
  getEditUser,
  postUpdateUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/images", getImages);
router.get("/get-add", getCreateUser);
router.get("/get-edit/:id", getEditUser);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
module.exports = router;

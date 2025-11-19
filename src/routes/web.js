const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getImages,
  postCreateUser,
  getCreateUser,
  getEditUser,
  postUpdateUser,
  deleteUser,
  postDeleteUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/images", getImages);
router.get("/get-add", getCreateUser);
router.get("/get-edit/:id", getEditUser);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", deleteUser);
router.post("/delete-user", postDeleteUser);
module.exports = router;

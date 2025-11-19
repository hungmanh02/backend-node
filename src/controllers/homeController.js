const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  postAddUser,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getImages = (req, res) => {
  res.render("sample.ejs");
};
const getCreateUser = (req, res) => {
  res.render("addUser.ejs");
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  postAddUser(email, name, city);
  res.send("Created user succeed");
};
const getEditUser = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);

  res.render("editUser.ejs", { userEdit: user });
};
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.id;
  // console.log(userId, email, name, city);
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);
  res.render("delete.ejs", { deleteUser: user });
};
const postDeleteUser = async (req, res) => {
  const userId = req.body.id;
  // console.log(req.body.id);
  await deleteUserById(userId);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getImages,
  postCreateUser,
  getCreateUser,
  getEditUser,
  postUpdateUser,
  deleteUser,
  postDeleteUser,
};

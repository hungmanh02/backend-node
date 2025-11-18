const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");
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

  let [results, fields] = await connection.query(
    `
    INSERT INTO 
    Users (email, name, city) 
    VALUES (?, ?, ?)`,
    [email, name, city]
  );
  console.log(">>> result= ", results);
  res.send("Created user succeed");
};
module.exports = { getHomePage, getImages, postCreateUser, getCreateUser };

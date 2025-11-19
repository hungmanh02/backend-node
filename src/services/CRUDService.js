const connection = require("../config/database");
const getAllUsers = async () => {
  const [results, fields] = await connection.query("select * from Users");
  return results;
};
const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `select * from Users where id=?`,
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
const postAddUser = async (email, name, city) => {
  let [results, fields] = await connection.query(
    `
    INSERT INTO 
    Users (email, name, city) 
    VALUES (?, ?, ?)`,
    [email, name, city]
  );
  return results;
};
const updateUserById = async (email, name, city, id) => {
  let [results, fields] = await connection.query(
    `
    UPDATE Users 
    SET email= ?,name = ?,city = ? where id = ?`,
    [email, name, city, id]
  );
  return results;
};
const deleteUserById = async (id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users  where id = ?`,
    [id]
  );
  return results;
};
module.exports = {
  getAllUsers,
  getUserById,
  postAddUser,
  updateUserById,
  deleteUserById,
};

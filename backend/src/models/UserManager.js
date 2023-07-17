const db = require("./index");

const createUser = (user) => {
  const SQL =
    "INSERT INTO user(lastname, firstname, email, hashedPassword, birthday) VALUES (?, ?, ?, ?, ?)";
  return db.query(SQL, [
    user.lastname,
    user.firstname,
    user.email,
    user.hashedPassword,
    user.birthday,
  ]);
};

const findByEmail = (user) => {
  const SQL = "SELECT * FROM user WHERE email = ?";
  return db.query(SQL, [user.email]);
};

const findAllUser = () => {
  const SQL =
    "SELECT id, lastname, firstname, email, birthday, adminStatus FROM user";
  return db.query(SQL);
};

const findOneUser = (id) => {
  const SQL =
    "SELECT id, lastname, firstname, email, birthday, adminStatus FROM user WHERE id = ?";
  return db.query(SQL, [id]);
};

const updateUser = (user) => {
  const SQL =
    "UPDATE user SET lastname = ?, firstname = ?, email = ?, birthday = ?, adminStatus = ? WHERE id = ?";
  return db.query(SQL, [
    user.lastname,
    user.firstname,
    user.email,
    user.birthday,
    user.adminStatus || false,
    user.id,
  ]);
};

const updateUserPwd = (user) => {
  const SQL = "UPDATE user SET hashedPassword = ? WHERE id = ?";
  return db.query(SQL, [user.hashedPassword, user.id]);
};

const deleteUser = (id) => {
  const SQL = "DELETE FROM user WHERE id = ?";
  return db.query(SQL, [id]);
};

module.exports = {
  createUser,
  findByEmail,
  findAllUser,
  findOneUser,
  updateUser,
  updateUserPwd,
  deleteUser,
};

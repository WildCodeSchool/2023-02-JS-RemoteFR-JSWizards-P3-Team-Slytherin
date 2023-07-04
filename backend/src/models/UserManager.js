const db = require("./index");

const createUser = (user) => {
  const SQL =
    "INSERT INTO user(lastname, firstname, email, hashedPassword, birthday, adminStatus) VALUES (?, ?, ?, ?, ?, ?)";
  return db.query(SQL, [
    user.lastname,
    user.firstname,
    user.email,
    user.hashedPassword,
    user.birthday,
    user.preference,
    user.adminStatus,
  ]);
};

const findByEmail = (user) => {
  const SQL = "SELECT * FROM user WHERE email = ?";
  return db.query(SQL, [user.email]);
};

const findAllUser = () => {
  const SQL =
    "SELECT lastname, firstname, email, birthday, adminStatus FROM user";
  return db.query(SQL);
};

const findOneUser = (id) => {
  const SQL =
    "SELECT lastname, firstname, email, birthday, adminStatus FROM user WHERE id = ?";
  return db.query(SQL, [id]);
};

const updateUser = (user) => {
  const SQL =
    "UPDATE user SET lastname = ?, firstname = ?, email = ?, hashedPassword = ?, birthday = ?, adminStatus = ? WHERE id = ?";
  return db.query(SQL, [
    user.lastname,
    user.firstname,
    user.email,
    user.hashedPassword,
    user.birthday,
    user.adminStatus,
    user.id,
  ]);
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
  deleteUser,
};

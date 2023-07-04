const db = require("./index");

const createReceipe = (receipe) => {
  const SQL =
    "INSERT INTO receipe(measuring1, measuring2, measuring3, id_user) VALUES (?, ?, ?, (SELECT id FROM user WHERE id = ?))";
  return db.query(SQL, [
    receipe.measuring1,
    receipe.measuring2,
    receipe.measuring3,
    receipe.id_user,
  ]);
};

const findAllReceipe = () => {
  const SQL = "SELECT * FROM receipe";
  return db.query(SQL);
};

const findOneReceipe = (id) => {
  const SQL = "SELECT * FROM receipe WHERE id = ?";
  return db.query(SQL, [id]);
};

const updateReceipe = (receipe) => {
  const SQL =
    "UPDATE receipe SET measuring1 = ?, measuring2 = ?, measuring3 = ? WHERE id = ?";
  return db.query(SQL, [
    receipe.measuring1,
    receipe.measuring2,
    receipe.measuring3,
    receipe.id,
  ]);
};

const deleteReceipe = (id) => {
  const SQL = "DELETE FROM receipe WHERE id = ?";
  return db.query(SQL, [id]);
};

module.exports = {
  createReceipe,
  findAllReceipe,
  findOneReceipe,
  updateReceipe,
  deleteReceipe,
};

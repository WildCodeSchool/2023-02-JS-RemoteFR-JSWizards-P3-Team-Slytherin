const db = require("./index");

const createRecipe = (recipe) => {
  const SQL =
    "INSERT INTO recipe(measuring, id_user) VALUES (?, (SELECT id FROM user WHERE id = ?))";
  return db.query(SQL, [recipe.measuring, recipe.id_user]);
};

const findAllRecipe = () => {
  const SQL = "SELECT * FROM recipe";
  return db.query(SQL);
};

const findOneRecipe = (id) => {
  const SQL = "SELECT * FROM recipe WHERE id = ?";
  return db.query(SQL, [id]);
};

const updateRecipe = (recipe) => {
  const SQL = "UPDATE recipe SET measuring = ? WHERE id = ?";
  return db.query(SQL, [recipe.measuring, recipe.id]);
};

const deleteRecipe = (id) => {
  const SQL = "DELETE FROM recipe WHERE id = ?";
  return db.query(SQL, [id]);
};

module.exports = {
  createRecipe,
  findAllRecipe,
  findOneRecipe,
  updateRecipe,
  deleteRecipe,
};

const db = require("./index");

const createRecipe = (iduser) => {
  const SQL = "INSERT INTO recipe(id_user) VALUES (?)";
  return db.query(SQL, [iduser]);
};

const findAllRecipe = () => {
  const SQL = "SELECT * FROM recipe";
  return db.query(SQL);
};

const findOneRecipe = (id) => {
  const SQL = "SELECT * FROM recipe WHERE id = ?";
  return db.query(SQL, [id]);
};

const findAllRecipesFromUser = (iduser) => {
  const SQL = "SELECT * FROM recipe WHERE id_user = ?";
  return db.query(SQL, [iduser]);
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
  findAllRecipesFromUser,
};

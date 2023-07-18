const db = require("./index");

const createRecipe = (recipe) => {
  const {
    idrecipe1,
    idwine1,
    dosage1,
    idrecipe2,
    idwine2,
    dosage2,
    idrecipe3,
    idwine3,
    dosage3,
  } = recipe;
  const SQL =
    "INSERT INTO recipe_wine (id_recipe, id_wine, dosage) VALUES (?,?,?), (?,?,?), (?,?,?) ;";
  return db.query(SQL, [
    idrecipe1,
    idwine1,
    dosage1,
    idrecipe2,
    idwine2,
    dosage2,
    idrecipe3,
    idwine3,
    dosage3,
  ]);
};

const deleteRecipeWine = (id) => {
  const SQL = "DELETE FROM recipe_wine WHERE id_recipe = ?";
  return db.query(SQL, [id]);
};

module.exports = {
  createRecipe,
  deleteRecipeWine,
};

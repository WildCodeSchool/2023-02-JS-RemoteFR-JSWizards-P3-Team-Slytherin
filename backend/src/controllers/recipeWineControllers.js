const RecipeWineManager = require("../models/RecipeWineManager");

const postRecipeWine = (req, res) => {
  const recipe = req.body;

  RecipeWineManager.createRecipe(recipe)
    .then(() => {
      res.status(201).json({ message: "Votre table a bien été modifiée" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const deleteRecipeWine = async (req, res, next) => {
  const { id } = req.params;
  try {
    const erase = await RecipeWineManager.deleteRecipeWine(id);
    if (erase[0].affectedRows !== 0) {
      next();
    } else {
      res.status(404).json({
        message: `Désolé, il y a eu un problème lors de la suppression de la recette`,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

module.exports = {
  postRecipeWine,
  deleteRecipeWine,
};

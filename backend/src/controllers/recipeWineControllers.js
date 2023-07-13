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

module.exports = {
  postRecipeWine,
};

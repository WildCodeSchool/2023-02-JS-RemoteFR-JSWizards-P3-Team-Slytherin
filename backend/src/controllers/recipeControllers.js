const recipeManager = require("../models/RecipeManager");

const postRecipe = (req, res) => {
  const { iduser } = req.params;
  recipeManager
    .createRecipe(iduser)
    .then(() => {
      res.status(201).json({ message: "Votre recette a bien été créée" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const getAllRecipe = async (req, res) => {
  try {
    const [recipes] = await recipeManager.findAllRecipe();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

const getOneRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await recipeManager.findOneRecipe(id);
    const recipe = data[0][0];
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({
        message: `Voici, les infos de l'atelier`,
        recipe,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

const getAllRecipesFromUser = async (req, res) => {
  const { iduser } = req.params;
  try {
    const data = await recipeManager.findAllRecipesFromUser(iduser);
    const recipe = data[0];
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(recipe);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

const putOneRecipe = (req, res) => {
  const recipe = req.body;

  recipe.id = parseInt(req.params.id, 10);

  recipeManager
    .updateRecipe(recipe)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const deleteOneRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const erase = await recipeManager.deleteRecipe(id);
    if (erase[0].affectedRows === 1) {
      res.status(200).json({
        message: "La recette a bien été supprimée",
      });
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
  postRecipe,
  getAllRecipe,
  getOneRecipe,
  putOneRecipe,
  deleteOneRecipe,
  getAllRecipesFromUser,
};

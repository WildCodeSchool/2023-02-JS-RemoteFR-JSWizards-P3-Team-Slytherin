const express = require("express");

const router = express.Router();

const multer = require("multer");
const fs = require("fs");

const upload = multer({ dest: "./public/assets/wines" });

const userControllers = require("./controllers/userControllers");
const { newUser, recognizeUser } = require("./middlewares/userMiddlewares");
const {
  hashPassword,
  verifyPassword,
} = require("./controllers/authControllers");
const workshopControllers = require("./controllers/workshopControllers");
const recipeControllers = require("./controllers/recipeControllers");
const userWorkshopControllers = require("./controllers/userWorkshopControllers");
const wineControllers = require("./controllers/wineControllers");
const glossaryControllers = require("./controllers/glossaryControllers");
const tastingControllers = require("./controllers/tastingControllers");
const wineWorkshopControllers = require("./controllers/wineWorkshopControllers");
const recipeWineControllers = require("./controllers/recipeWineControllers");
const {
  foreignKeyOFF,
  foreignKeyON,
} = require("./middlewares/ForeignKeyMiddleware");

// Gestion login/logout des utilisateurs (admin et user)

router.post("/login", recognizeUser, verifyPassword);
router.get("/logout", userControllers.logout);

// Gestion utilisateurs

router.post("/inscription", newUser, hashPassword, userControllers.postUser);
router.get("/users", userControllers.getAllUser);
router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", hashPassword, userControllers.putOneUser);
router.put("/users/admin/:id", userControllers.adminStatus);
router.delete(
  "/users/:id",
  foreignKeyOFF,
  userControllers.deleteOneUser,
  foreignKeyON
);

// Gestion ateliers

router.post("/workshops/creation", workshopControllers.postWorkshop);
router.get("/workshops", workshopControllers.getAllWorkshop);
router.get("/workshops/:id", workshopControllers.getOneWorkshop);
router.put("/workshops/inactive", workshopControllers.putAllWorkshopInactive);
router.put("/workshops/:id", workshopControllers.putOneWorkshop);
router.delete(
  "/workshops/:id",
  foreignKeyOFF,
  workshopControllers.deleteOneWorkshop,
  foreignKeyON
);

// Gestion recette par vin

router.post("/recipes/creation/:iduser", recipeControllers.postRecipe);
router.get("/recipes", recipeControllers.getAllRecipe);
router.get("/recipes/:id", recipeControllers.getOneRecipe);
router.get("/recipes/all/:iduser", recipeControllers.getAllRecipesFromUser);
router.get(
  "/recipes/all/detailed/:iduser",
  recipeControllers.getAllDetailedRecipesFromUser
);
router.put("/recipes/:id", recipeControllers.putOneRecipe);
router.delete("/recipes/:id", recipeControllers.deleteOneRecipe);

// Gestion de la table intermédiaire recette/vin

router.post("/recipeWine/creation", recipeWineControllers.postRecipeWine);
router.delete(
  "/recipeWine/:id",
  recipeWineControllers.deleteRecipeWine,
  recipeControllers.deleteOneRecipe
);

// Gestion des avis/commentaires

router.post("/avis/creation", userWorkshopControllers.postUserWorkshop);
router.get("/avis", userWorkshopControllers.getAllUserWorkshop);
router.get(
  "/avis/:iduser/:idworkshop",
  userWorkshopControllers.getOneUserWorkshop
);
router.put(
  "/avis/:iduser/:idworkshop",
  userWorkshopControllers.putOneUserWorkshop
);
router.delete(
  "/avis/:iduser/:idworkshop",
  userWorkshopControllers.deleteOneUserWorkshop
);

// Gestion des vins

router.get("/wines", wineControllers.getWine);
router.get("/wines/:id", wineControllers.getOneWine);
router.post("/wines", wineControllers.postWine);
router.delete("/wines/:id", wineControllers.deleteWine);
router.put("/wines/:id", wineControllers.putWine);
router.post("/wines/upload", upload.single("wineimg"), (req, res) => {
  const { originalname, path } = req.file;

  fs.rename(path, `./public/assets/wines/${originalname}`, (err) => {
    if (err) throw err;
  });

  res.json({ message: `file uploaded` });
});

// Gestion du lexique

router.get("/glossary", glossaryControllers.getGlossary);
router.get("/glossary/:id", glossaryControllers.getOneGlossary);
router.post("/glossary", glossaryControllers.postGlossary);
router.put("/glossary/:id", glossaryControllers.putGlossary);
router.delete("/glossary/:id", glossaryControllers.deleteGlossary);

// Gestion des fiches dégustation par vin

router.get("/tasting", tastingControllers.getTasting);
router.get("/tasting/:id", tastingControllers.getOneTasting);
router.get(
  "/tasting/:iduser/:idworkshop",
  tastingControllers.getUserTastingFromWorkshop
);
router.post("/tasting", tastingControllers.postTasting);
router.put("/tasting/:id", tastingControllers.putTasting);
router.delete("/tasting/:id", tastingControllers.deleteTasting);

// Gestion de la table intermédiaire : vin/atelier

router.post("/wineWorkshop", wineWorkshopControllers.postWineWorkshop);
router.get("/wineWorkshop", wineWorkshopControllers.getSelection);

// Gestion vins de l'atelier actif + score

router.get("/resume", wineWorkshopControllers.getWineAndScore);

module.exports = router;

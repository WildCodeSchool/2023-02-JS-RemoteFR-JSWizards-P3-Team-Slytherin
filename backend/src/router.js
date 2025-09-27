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

// Test route

router.get("/api", (req, res) => {
  res.send("hello world");
});

// Gestion login/logout des utilisateurs (admin et user)

router.post("/api/login", recognizeUser, verifyPassword);
router.get("/api/logout", userControllers.logout);

// Gestion utilisateurs

router.post(
  "/api/inscription",
  newUser,
  hashPassword,
  userControllers.postUser
);
router.get("/api/users", userControllers.getAllUser);
router.get("/api/users/:id", userControllers.getOneUser);
router.put("/api/users/:id", hashPassword, userControllers.putOneUser);
router.put("/api/users/password/:id", hashPassword, userControllers.updatePwd);
router.put("/api/users/admin/:id", userControllers.adminStatus);
router.delete(
  "/api/users/:id",
  foreignKeyOFF,
  userControllers.deleteOneUser,
  foreignKeyON
);

// Gestion ateliers

router.post("/api/workshops/creation", workshopControllers.postWorkshop);
router.get("/api/workshops", workshopControllers.getAllWorkshop);
router.get("/api/workshops/:id", workshopControllers.getOneWorkshop);
router.put(
  "/api/workshops/inactive",
  workshopControllers.putAllWorkshopInactive
);
router.put("/api/workshops/:id", workshopControllers.putOneWorkshop);
router.delete(
  "/api/workshops/:id",
  foreignKeyOFF,
  workshopControllers.deleteOneWorkshop,
  foreignKeyON
);

// Gestion recette par vin

router.post("/api/recipes/creation/:iduser", recipeControllers.postRecipe);
router.get("/api/recipes", recipeControllers.getAllRecipe);
router.get("/api/recipes/:id", recipeControllers.getOneRecipe);
router.get("/api/recipes/all/:iduser", recipeControllers.getAllRecipesFromUser);
router.get(
  "/api/recipes/all/detailed/:iduser",
  recipeControllers.getAllDetailedRecipesFromUser
);
router.put("/api/recipes/:id", recipeControllers.putOneRecipe);
router.delete("/api/recipes/:id", recipeControllers.deleteOneRecipe);

// Gestion de la table intermédiaire recette/vin

router.post("/api/recipeWine/creation", recipeWineControllers.postRecipeWine);
router.delete(
  "/api/recipeWine/:id",
  recipeWineControllers.deleteRecipeWine,
  recipeControllers.deleteOneRecipe
);

// Gestion des avis/commentaires

router.post("/api/avis/creation", userWorkshopControllers.postUserWorkshop);
router.get("/api/avis", userWorkshopControllers.getAllUserWorkshop);
router.get("/api/avisuser", userWorkshopControllers.getAllUserOpinion);
router.get(
  "/api/avis/:iduser/:idworkshop",
  userWorkshopControllers.getOneUserWorkshop
);
router.put(
  "/api/avis/:iduser/:idworkshop",
  userWorkshopControllers.putOneUserWorkshop
);
router.delete(
  "/api/avis/:iduser/:idworkshop",
  userWorkshopControllers.deleteOneUserWorkshop
);

// Gestion des vins

router.get("/api/wines", wineControllers.getWine);
router.get("/api/wines/:id", wineControllers.getOneWine);
router.post("/api/wines", wineControllers.postWine);
router.delete("/api/wines/:id", wineControllers.deleteWine);
router.put("/api/wines/:id", wineControllers.putWine);
router.post("/api/wines/upload", upload.single("wineimg"), (req, res) => {
  const { originalname, path } = req.file;

  fs.rename(path, `./public/assets/wines/${originalname}`, (err) => {
    if (err) throw err;
  });

  res.json({ message: `file uploaded` });
});

// Gestion du lexique

router.get("/api/glossary", glossaryControllers.getGlossary);
router.get("/api/glossary/:id", glossaryControllers.getOneGlossary);
router.post("/api/glossary", glossaryControllers.postGlossary);
router.put("/api/glossary/:id", glossaryControllers.putGlossary);
router.delete("/api/glossary/:id", glossaryControllers.deleteGlossary);

// Gestion des fiches dégustation par vin

router.get("/api/tasting", tastingControllers.getTasting);
router.get("/api/tasting/:id", tastingControllers.getOneTasting);
router.get(
  "/api/tasting/:iduser/:idworkshop",
  tastingControllers.getUserTastingFromWorkshop
);
router.get(
  "/api/tasting/users/:iduser/workshops/:idworkshop/wines/:idwine",
  tastingControllers.getUserTastingOfWineFromWorkshop
);
router.post("/api/tasting", tastingControllers.postTasting);
router.put("/api/tasting/:id", tastingControllers.putTasting);
router.delete("/api/tasting/:id", tastingControllers.deleteTasting);

// Gestion de la table intermédiaire : vin/atelier

router.post("/api/wineWorkshop", wineWorkshopControllers.postWineWorkshop);
router.get("/api/wineWorkshop", wineWorkshopControllers.getSelection);
router.get(
  "/api/wineWorkshop/:idWorkshop",
  wineWorkshopControllers.getOneWorkshop
);

router.get(
  "/api/winesWorkshops/:idUser",
  wineWorkshopControllers.getLastFiveWinesForOneUser
);
router.get(
  "/api/allWinesWorkshops/:idUser",
  wineWorkshopControllers.getWinesForOneUser
);
router.get(
  "/api/allWinesFromActiveWorkshops/:idUser/:idWorkshop",
  wineWorkshopControllers.getAllWinesFromActiveWorkshops
);

// Gestion vins de l'atelier actif + score

router.get("/api/resume/:id", wineWorkshopControllers.getWineAndScore);

module.exports = router;

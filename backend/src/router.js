const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { newUser, recognizeUser } = require("./middlewares/userMiddlewares");
const {
  hashPassword,
  verifyPassword,
} = require("./controllers/authControllers");
const workshopControllers = require("./controllers/workshopControllers");
const receipeControllers = require("./controllers/receipeControllers");
const userWorkshopControllers = require("./controllers/userWorkshopControllers");

router.post("/login", recognizeUser, verifyPassword);
router.get("/logout", userControllers.logout);

router.post("/inscription", newUser, hashPassword, userControllers.postUser);
router.get("/users", userControllers.getAllUser);
router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", userControllers.putOneUser);
router.delete("/users/:id", userControllers.deleteOneUser);

router.post("/workshops/creation", workshopControllers.postWorkshop);
router.get("/workshops", workshopControllers.getAllWorkshop);
router.get("/workshops/:id", workshopControllers.getOneWorkshop);
router.put("/workshops/:id", workshopControllers.putOneWorkshop);
router.delete("/workshops/:id", workshopControllers.deleteOneWorkshop);

router.post("/receipes/creation", receipeControllers.postReceipe);
router.get("/receipes", receipeControllers.getAllReceipe);
router.get("/receipes/:id", receipeControllers.getOneReceipe);
router.put("/receipes/:id", receipeControllers.putOneReceipe);
router.delete("/receipes/:id", receipeControllers.deleteOneReceipe);

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

module.exports = router;

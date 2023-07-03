const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { newUser, recognizeUser } = require("./middlewares/userMiddlewares");
const {
  hashPassword,
  verifyPassword,
} = require("./controllers/authControllers");

router.post("/login", recognizeUser, verifyPassword);
router.get("/logout", userControllers.logout);

router.post("/inscription", newUser, hashPassword, userControllers.postUser);
router.get("/users", userControllers.getAllUser);
router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", userControllers.putOneUser);
router.delete("/users/:id", userControllers.deleteOneUser);

module.exports = router;

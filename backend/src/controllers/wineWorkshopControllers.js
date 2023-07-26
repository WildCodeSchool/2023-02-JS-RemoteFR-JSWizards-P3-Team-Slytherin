const wineWorkshopManager = require("../models/WineWorkshopManager");

const postWineWorkshop = (req, res) => {
  const selection = req.body;

  wineWorkshopManager
    .createWineWorkshop(selection)
    .then(() => {
      res.status(201).json({ message: "Votre table a bien été modifiée" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const getSelection = (req, res) => {
  wineWorkshopManager
    .selection()
    .then((wines) => res.json(wines[0]))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getLastFiveWinesForOneUser = (req, res) => {
  const { idUser } = req.params;
  wineWorkshopManager
    .findLastFiveWinesForOneUser(idUser)
    .then((wines) => res.json(wines[0]))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getWinesForOneUser = (req, res) => {
  const { idUser } = req.params;
  wineWorkshopManager
    .findWinesForOneUser(idUser)
    .then((wines) => res.json(wines[0]))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllWinesFromActiveWorkshops = (req, res) => {
  const { idUser, idWorkshop } = req.params;
  wineWorkshopManager
    .findWinesForOneUserFromActiveWorkshop(idUser, idWorkshop)
    .then((wines) => res.json(wines[0]))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneWorkshop = (req, res) => {
  const { idWorkshop } = req.params;
  wineWorkshopManager
    .findWinesForOneWorkshop(idWorkshop)
    .then((wines) => res.json(wines[0]))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getWineAndScore = (req, res) => {
  wineWorkshopManager
    .resume(req.params.id)
    .then((wines) => res.json(wines[0]))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  postWineWorkshop,
  getSelection,
  getLastFiveWinesForOneUser,
  getWinesForOneUser,
  getWineAndScore,
  getOneWorkshop,
  getAllWinesFromActiveWorkshops,
};

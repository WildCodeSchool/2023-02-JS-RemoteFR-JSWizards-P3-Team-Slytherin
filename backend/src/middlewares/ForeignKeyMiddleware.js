const ForeignKeyManager = require("../models/ForeignKeyManager");

const foreignKeyOFF = (req, res, next) => {
  ForeignKeyManager.FKOFF()
    .then(next())
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const foreignKeyON = (req, res) => {
  ForeignKeyManager.FKON()
    .then(
      res.status(200).json({
        message: "La cible a bien été supprimé",
      })
    )
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  foreignKeyOFF,
  foreignKeyON,
};

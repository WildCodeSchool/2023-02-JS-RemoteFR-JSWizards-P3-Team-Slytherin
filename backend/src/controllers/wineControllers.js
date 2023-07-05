const wineManager = require("../models/wineManager");

const getWine = (req, res) => {
  wineManager
    .findAllWine()
    .then((wines) => {
      res.json(wines[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneWine = (req, res) => {
  wineManager
    .findOneWine(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postWine = (req, res) => {
  const addWine = req.body;
  wineManager
    .createWine(addWine)
    .then((wines) => {
      if (wines.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Vin ajouté");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteWine = (req, res) => {
  wineManager
    .deleteWine(req.params.id)
    .then((wines) => {
      if (wines.affedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Vin supprimé");
      }
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
};

const putWine = (req, res) => {
  const wines = req.body;
  wines.id = parseInt(req.params.id, 10);
  wineManager
    .updateWine(wines)
    .then((wine) => {
      if (wine.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Vin mis à jour");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getWine, postWine, deleteWine, putWine, getOneWine };

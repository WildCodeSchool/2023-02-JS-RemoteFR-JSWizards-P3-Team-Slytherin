const tastingManager = require("../models/tastingManager");

const getTasting = (req, res) => {
  tastingManager
    .findAllTasting()
    .then((taste) => {
      res.json(taste[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneTasting = (req, res) => {
  tastingManager
    .findOneTasting(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserTastingFromWorkshop = (req, res) => {
  const { iduser, idworkshop } = req.params;
  tastingManager
    .findUserTasting(iduser, idworkshop)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postTasting = (req, res) => {
  const addTasting = req.body;
  tastingManager
    .createTasting(addTasting)
    .then((taste) => {
      if (taste.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Nouvelle dégustation ajoutée");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteTasting = (req, res) => {
  tastingManager
    .deleteTasting(req.params.id)
    .then((taste) => {
      if (taste.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Dégustation supprimée");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

const putTasting = (req, res) => {
  const tasted = req.body;
  tasted.id = parseInt(req.params.id, 10);
  tastingManager
    .updateTasting(tasted)
    .then((taste) => {
      if (taste.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Dégustation mise à jour");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getTasting,
  postTasting,
  deleteTasting,
  putTasting,
  getUserTastingFromWorkshop,
  getOneTasting,
};

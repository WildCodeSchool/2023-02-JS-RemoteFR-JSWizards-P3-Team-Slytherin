const glossaryManager = require("../models/glossaryManager");

const getGlossary = (req, res) => {
  glossaryManager
    .findAllGlossary()
    .then((words) => {
      res.json(words[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneGlossary = (req, res) => {
  glossaryManager
    .findOneGlossary(req.params.id)
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

const postGlossary = (req, res) => {
  const addWords = req.body;
  glossaryManager
    .createGlossary(addWords)
    .then((words) => {
      if (words.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Vocabulaire ajouté");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteGlossary = (req, res) => {
  glossaryManager
    .deleteGlossary(req.params.id)
    .then((words) => {
      if (words.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Vocabulaire supprimé");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

const putGlossary = (req, res) => {
  const words = req.body;
  words.id = parseInt(req.params.id, 10);
  glossaryManager
    .updateGlossary(words)
    .then((word) => {
      if (word.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Vocabulaire mis à jour");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getGlossary,
  postGlossary,
  deleteGlossary,
  putGlossary,
  getOneGlossary,
};

const receipeManager = require("../models/ReceipeManager");

const postReceipe = (req, res) => {
  const receipe = req.body;

  receipeManager
    .createReceipe(receipe)
    .then(() => {
      res.status(201).json({ message: "Votre recette a bien été créée" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const getAllReceipe = async (req, res) => {
  try {
    const [receipes] = await receipeManager.findAllReceipe();
    res
      .status(200)
      .json({ message: "Voici, toutes les recettes", recettes: { receipes } });
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

const getOneReceipe = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await receipeManager.findOneReceipe(id);
    const receipe = data[0][0];
    if (receipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({
        message: `Voici, les infos de l'atelier`,
        receipe,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

// const putOneReceipe = async (req, res) => {
//   const { receipe } = req.body;
//   try {
//     const modify = await receipeManager.updateReceipe(receipe);
//     if (modify[0].affectedRows === 1) {
//       res.status(200).json({
//         message: "Les informations ont bien été modifiées",
//       });
//     } else {
//       res.status(500).json({
//         message: "Désolé, nous n'avons pas pu modifier les informations",
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Désolé, le serveur est en panne" });
//   }
// };

const putOneReceipe = (req, res) => {
  const receipe = req.body;

  receipe.id = parseInt(req.params.id, 10);

  receipeManager
    .updateReceipe(receipe)
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

const deleteOneReceipe = async (req, res) => {
  const { id } = req.params;
  try {
    const erase = await receipeManager.deleteReceipe(id);
    if (erase[0].affectedRows === 1) {
      res.status(200).json({
        message: "La recette a bien été supprimée",
      });
    } else {
      res.status(500).json({
        message: `Désolé, il y a eu un problème lors de la suppression de l'atelier`,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

module.exports = {
  postReceipe,
  getAllReceipe,
  getOneReceipe,
  putOneReceipe,
  deleteOneReceipe,
};

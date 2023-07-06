const workshopManager = require("../models/WorkshopManager");

const postWorkshop = (req, res) => {
  const workshop = req.body;

  workshopManager
    .createWorkshop(workshop)
    .then(() => {
      res.status(201).json({ message: "Votre atelier a bien été créé" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const getAllWorkshop = async (req, res) => {
  try {
    const [workshops] = await workshopManager.findAllWorkshop();
    res
      .status(200)
      .json({ message: "Voici, tous les ateliers", ateliers: { workshops } });
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

const getOneWorkshop = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await workshopManager.findOneWorkshop(id);
    const workshop = data[0][0];
    if (workshop == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({
        message: `Voici, les infos de l'atelier`,
        workshop,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

// const putOneWorkshop = async (req, res) => {
//   const { workshop } = req.body;
//   try {
//     const modify = await workshopManager.updateWorkshop(workshop);
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

const putOneWorkshop = (req, res) => {
  const workshop = req.body;

  workshop.id = parseInt(req.params.id, 10);

  workshopManager
    .updateWorkshop(workshop)
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

const deleteOneWorkshop = async (req, res) => {
  const { id } = req.params;
  try {
    const erase = await workshopManager.deleteWorkshop(id);
    if (erase[0].affectedRows === 1) {
      res.status(200).json({
        message: "L'atelier a bien été supprimé",
      });
    } else {
      res.status(404).json({
        message: `Désolé, il y a eu un problème lors de la suppression de l'atelier`,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

module.exports = {
  postWorkshop,
  getAllWorkshop,
  getOneWorkshop,
  putOneWorkshop,
  deleteOneWorkshop,
};

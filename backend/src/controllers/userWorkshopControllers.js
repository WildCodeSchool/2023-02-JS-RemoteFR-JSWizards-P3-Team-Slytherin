const userWorkshop = require("../models/UserWorkshopManager");

const postUserWorkshop = (req, res) => {
  const userworkshop = req.body;

  userWorkshop
    .createUserWorkshop(userworkshop)
    .then(() => {
      res.status(201).json({ message: "Votre avis a bien été enregistré" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const getAllUserWorkshop = async (req, res) => {
  try {
    const [userworkshop] = await userWorkshop.findAllUserWorkshop();
    res.status(200).json({
      message: "Voici, tous les avis",
      recettes: { userworkshop },
    });
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

const getOneUserWorkshop = async (req, res) => {
  const { iduser, idworkshop } = req.params;
  try {
    const data = await userWorkshop.findOneUserWorkshop(iduser, idworkshop);
    const userworkshop = data[0][0];
    if (userworkshop == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({
        message: `Voici, l'avis demandé`,
        userworkshop,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

// const putOneUserWorkshop = async (req, res) => {
//   const { userworkshop } = req.body;
//   try {
//     const modify = await userWorkshop.updateUserWorkshop(userworkshop);
//     if (modify[0].affectedRows === 1) {
//       res.status(200).json({
//         message: "L'avis a bien été modifié",
//       });
//     } else {
//       res.status(500).json({
//         message: "Désolé, nous n'avons pas pu modifier l'avis",
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Désolé, le serveur est en panne" });
//   }
// };

const putOneUserWorkshop = (req, res) => {
  const userworkshop = req.body;

  userworkshop.iduser = parseInt(req.params.iduser, 10);
  userworkshop.idworkshop = parseInt(req.params.idworkshop, 10);

  userWorkshop
    .updateUserWorkshop(userworkshop)
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

const deleteOneUserWorkshop = async (req, res) => {
  const { iduser, idworkshop } = req.params;
  try {
    const erase = await userWorkshop.deleteUserWorkshop(iduser, idworkshop);
    if (erase[0].affectedRows === 1) {
      res.status(200).json({
        message: "L'avis a bien été supprimé",
      });
    } else {
      res.status(500).json({
        message: `Désolé, il y a eu un problème lors de la suppression de l'avis`,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

module.exports = {
  postUserWorkshop,
  getAllUserWorkshop,
  getOneUserWorkshop,
  putOneUserWorkshop,
  deleteOneUserWorkshop,
};

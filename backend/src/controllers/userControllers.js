const userManager = require("../models/UserManager");

const postUser = (req, res) => {
  const user = req.body;

  userManager
    .createUser(user)
    .then(() => {
      res.status(201).json({ message: "Votre compte a bien été créé" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const getAllUser = async (req, res) => {
  try {
    const [users] = await userManager.findAllUser();
    res
      .status(200)
      .json({ message: "Voici, tous les utilisateurs", users: { users } });
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await userManager.findOneUser(id);
    const user = data[0][0];
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({
        message: `Voici, les infos de ${user.firstname}`,
        user,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

// const putOneUser = async (req, res) => {
//   const { user } = req.body;
//   try {
//     const modify = await userManager.updateUser(user);
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

const putOneUser = (req, res) => {
  const user = req.body;

  user.id = parseInt(req.params.id, 10);

  userManager
    .updateUser(user)
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

const deleteOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const erase = await userManager.deleteUser(id);
    if (erase[0].affectedRows === 1) {
      res.status(200).json({
        message: "L'utilisateur a bien été supprimé",
      });
    } else {
      res.status(500).json({
        message: `Désolé, il y a eu un problème lors de la suppression de ${erase.firstname}`,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Désolé, le serveur est en panne" });
  }
};

const logout = (req, res) => {
  res.clearCookie("appjwt").status(200).json({ message: "User logged out" });
};

module.exports = {
  postUser,
  getAllUser,
  getOneUser,
  putOneUser,
  deleteOneUser,
  logout,
};

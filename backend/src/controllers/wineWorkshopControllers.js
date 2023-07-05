const wineWorkshopManager = require("../models/WineWorkshopManager");

const postWineWorkshop = (req, res) => {
  const wineWorkshop = req.body;

  wineWorkshopManager
    .createWineWorkshop(wineWorkshop)
    .then(() => {
      res.status(201).json({ message: "Votre table a bien été modifiée" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

module.exports = {
  postWineWorkshop,
};

const db = require("./index");

const createWineWorkshop = (wineWorkshop) => {
  const SQL =
    "INSERT INTO wine_workshop(id_workshop) SELECT id FROM workshop WHERE id = ?";
  return db.query(SQL, [wineWorkshop.id]);
};

module.exports = {
  createWineWorkshop,
};

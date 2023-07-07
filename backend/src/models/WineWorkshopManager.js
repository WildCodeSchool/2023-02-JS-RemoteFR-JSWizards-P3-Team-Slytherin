const db = require("./index");

const createWineWorkshop = (wineWorkshop) => {
  const SQL =
    "INSERT INTO wine_workshop(id_workshop) SELECT id FROM workshop WHERE id = ?";
  return db.query(SQL, [wineWorkshop.id]);
};

module.exports = {
  createWineWorkshop,
};

// INSERT INTO table_intermediaire (valeur_source)
// SELECT valeur
// FROM table_source
// WHERE condition;

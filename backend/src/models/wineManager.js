const db = require("./index");

const findAllWine = () => {
  return db.query(`select * from wine`);
};

const findOneWine = (id) => {
  return db.query(`select * from  wine where id = ?`, [id]);
};

const createWine = (wines) => {
  return db.query(
    `insert into wine (wineName, castle, grapeVariety, wineYear, wineDescription, wineType, wineImage) values (?, ? ,?, ?, ?, ?, ?)`,
    [
      wines.wineName,
      wines.castle,
      wines.grapeVariety,
      wines.wineYear,
      wines.wineDescription,
      wines.wineType,
      wines.wineImage,
    ]
  );
};

const updateWine = (wine) => {
  return db.query(
    `update wine set wineName = ?, castle = ?, grapeVariety = ?, wineYear = ?, wineDescription = ?, wineType = ?, wineImage = ? where id = ?`,
    [
      wine.wineName,
      wine.castle,
      wine.grapeVariety,
      wine.wineYear,
      wine.wineDescription,
      wine.wineType,
      wine.wineImage,
      wine.id,
    ]
  );
};

const deleteWine = (id) => {
  return db.query(`delete from wine where id = ?`, [id]);
};

module.exports = {
  createWine,
  updateWine,
  findAllWine,
  deleteWine,
  findOneWine,
};

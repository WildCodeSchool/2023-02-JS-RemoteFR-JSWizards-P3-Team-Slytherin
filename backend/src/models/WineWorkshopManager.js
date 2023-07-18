const db = require("./index");

const createWineWorkshop = (selection) => {
  const {
    idworkshop1,
    idwine1,
    idworkshop2,
    idwine2,
    idworkshop3,
    idwine3,
    idworkshop4,
    idwine4,
    idworkshop5,
    idwine5,
  } = selection;
  const SQL =
    "INSERT INTO wine_workshop (id_workshop, id_wine) VALUES ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?));";
  return db.query(SQL, [
    idworkshop1,
    idwine1,
    idworkshop2,
    idwine2,
    idworkshop3,
    idwine3,
    idworkshop4,
    idwine4,
    idworkshop5,
    idwine5,
  ]);
};

const selection = () => {
  return db.query(
    `SELECT * FROM wine as w INNER JOIN wine_workshop AS ww ON w.id = ww.id_wine INNER JOIN workshop AS ws ON ww.id_workshop = ws.id WHERE ws.active = 1;`
  );
};

const findLastFiveWinesForOneUser = (idUser) => {
  const SQL =
    "SELECT * FROM wine AS w INNER JOIN wine_workshop AS ww ON w.id = ww.id_wine INNER JOIN user_workshop AS uw ON ww.id_workshop = uw.id_workshop INNER JOIN workshop AS ws ON uw.id_workshop = ws.id WHERE uw.id_user = ? ORDER BY ws.workshopDate DESC LIMIT 5";
  return db.query(SQL, [idUser]);
};

const findWinesForOneUser = (idUser) => {
  const SQL =
    "SELECT DISTINCT w.wineName, w.wineImage, t.score, ws.workshopDate FROM wine AS w INNER JOIN wine_workshop AS ww ON w.id = ww.id_wine INNER JOIN user_workshop AS uw ON ww.id_workshop = uw.id_workshop INNER JOIN workshop AS ws ON uw.id_workshop = ws.id LEFT JOIN tasting AS t ON ws.id = t.id_workshop AND t.id_user = uw.id_user AND t.id_wine = w.id WHERE uw.id_user = ? ORDER BY ws.workshopDate DESC";
  return db.query(SQL, [idUser]);
};

const resume = () => {
  return db.query(
    `SELECT wine.wineName, wine.wineDescription, tasting.score FROM wine INNER JOIN tasting ON wine.id = tasting.id_wine INNER JOIN wine_workshop AS ww ON wine.id = ww.id_wine INNER JOIN workshop AS ws ON ww.id_workshop = ws.id WHERE ws.active = 1; `
  );
};

module.exports = {
  createWineWorkshop,
  selection,
  findLastFiveWinesForOneUser,
  findWinesForOneUser,
  resume,
};

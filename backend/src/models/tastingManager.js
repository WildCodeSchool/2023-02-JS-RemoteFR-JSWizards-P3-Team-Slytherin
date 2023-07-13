const db = require("./index");

const findAllTasting = () => {
  return db.query(`select * from  tasting`);
};

const findOneTasting = (id) => {
  return db.query(`select * from tasting where id = ?`, [id]);
};

const findUserTasting = (iduser, idworkshop) => {
  return db.query(
    `SELECT score, color, clarity, density, intensity, noseFruits, noseFlowers, nosePlants, noseSpices, noseAmpyreumatique, noseMineral, mouthFruits, mouthFlowers, mouthPlants, mouthSpices, mouthAmpyreumatique, mouthMineral, persistance, smooth, acidity, tanin, alcohol, id_workshop, id_user, id_wine from tasting where id_user = ? AND id_workshop=?`,
    [iduser, idworkshop]
  );
};

const createTasting = (taste) => {
  return db.query(
    `insert into tasting (score, color, clarity, density, intensity, noseFruits, noseFlowers, nosePlants, noseSpices, noseAmpyreumatique, noseMineral, mouthFruits, mouthFlowers, mouthPlants, mouthSpices, mouthAmpyreumatique, mouthMineral, persistance, smooth, acidity, tanin, alcohol, id_workshop, id_user, id_wine) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, (select id from workshop where id=?), (select id from user where id=?), (select id from wine where id=?))`,
    [
      taste.score,
      taste.color,
      taste.clarity,
      taste.density,
      taste.intensity,
      taste.noseFruits,
      taste.noseFlowers,
      taste.nosePlants,
      taste.noseSpices,
      taste.noseAmpyreumatique,
      taste.noseMineral,
      taste.mouthFruits,
      taste.mouthFlowers,
      taste.mouthPlants,
      taste.mouthSpices,
      taste.mouthAmpyreumatique,
      taste.mouthMineral,
      taste.persistance,
      taste.smooth,
      taste.acidity,
      taste.tanin,
      taste.alcohol,
      taste.id_workshop,
      taste.id_user,
      taste.id_wine,
    ]
  );
};

const updateTasting = (taste) => {
  return db.query(
    `update tasting set score = ?, color = ?, clarity = ?, density = ?, intensity = ?, noseFruits = ?, noseFlowers = ?, nosePlants = ?, noseSpices = ?, noseAmpyreumatique = ?, noseMineral = ?, mouthFruits = ?, mouthFlowers = ?, mouthPlants = ?, mouthSpices = ?, mouthAmpyreumatique = ?, mouthMineral = ?, persistance = ?, smooth = ?, acidity = ?, tanin = ?, alcohol = ?, id_workshop = ?, id_user = ?, id_wine = ? where id = ?`,
    [
      taste.score,
      taste.color,
      taste.clarity,
      taste.density,
      taste.intensity,
      taste.noseFruits,
      taste.noseFlowers,
      taste.nosePlants,
      taste.noseSpices,
      taste.noseAmpyreumatique,
      taste.noseMineral,
      taste.mouthFruits,
      taste.mouthFlowers,
      taste.mouthPlants,
      taste.mouthSpices,
      taste.mouthAmpyreumatique,
      taste.mouthMineral,
      taste.persistance,
      taste.smooth,
      taste.acidity,
      taste.tanin,
      taste.alcohol,
      taste.id_workshop,
      taste.id_user,
      taste.id_wine,
      taste.id,
    ]
  );
};

const deleteTasting = (id) => {
  return db.query(`delete from tasting where id = ?`, [id]);
};

module.exports = {
  findAllTasting,
  updateTasting,
  deleteTasting,
  createTasting,
  findUserTasting,
  findOneTasting,
};

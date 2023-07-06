const db = require("./index");

const findAllTasting = () => {
  return db.query(`select * from  tasting`);
};

const findOneTasting = (id) => {
  return db.query(`select * from tasting where id = ?`, [id]);
};

const createTasting = (taste) => {
  return db.query(
    `insert into tasting (score, color, clarity, density, intensity, noseFruits, noseFlowers, nosePlants, noseSpices, noseAmpyreumatique, noseMineral, mouthFruits, mouthFlowers, mouthPlants, mouthSpices, mouthAmpyreumatique, mouthMineral, persistance, smooth, acidity, tanin, alcohol, id_workshop, id_recipe) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, (select id from workshop where id=?), (select id from recipe where id=?))`,
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
      taste.id_recipe,
    ]
  );
};

const updateTasting = (taste) => {
  return db.query(
    `update tasting set score = ?, color = ?, clarity = ?, density = ?, intensity = ?, noseFruits = ?, noseFlowers = ?, nosePlants = ?, noseSpices = ?, noseAmpyreumatique = ?, noseMineral = ?, mouthFruits = ?, mouthFlowers = ?, mouthPlants = ?, mouthSpices = ?, mouthAmpyreumatique = ?, mouthMineral = ?, persistance = ?, smooth = ?, acidity = ?, tanin = ?, alcohol = ?, id_workshop = ?, id_recipe = ? where id = ?`,
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
      taste.id_recipe,
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
  findOneTasting,
};

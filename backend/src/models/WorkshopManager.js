const db = require("./index");

const createWorkshop = (workshop) => {
  const SQL =
    "INSERT INTO workshop(active, workshopDate, personNb) VALUES (?, ?, ?)";
  return db.query(SQL, [
    workshop.active,
    workshop.workshopDate,
    workshop.personNb,
  ]);
};

const findAllWorkshop = () => {
  const SQL = "SELECT * FROM workshop";
  return db.query(SQL);
};

const findOneWorkshop = (id) => {
  const SQL = "SELECT * FROM workshop WHERE id = ?";
  return db.query(SQL, [id]);
};

const updateWorkshop = (workshop) => {
  const SQL =
    "UPDATE workshop SET active = ?, workshopDate = ?, personNb = ? WHERE id = ?";
  return db.query(SQL, [
    workshop.active,
    workshop.workshopDate,
    workshop.personNb,
    workshop.id,
  ]);
};

const deleteWorkshop = (id) => {
  const SQL = "DELETE FROM workshop WHERE id = ?";
  return db.query(SQL, [id]);
};

module.exports = {
  createWorkshop,
  findAllWorkshop,
  findOneWorkshop,
  updateWorkshop,
  deleteWorkshop,
};

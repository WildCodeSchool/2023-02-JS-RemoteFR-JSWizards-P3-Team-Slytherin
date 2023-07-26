const db = require("./index");

const createUserWorkshop = (userWorkshop) => {
  const SQL =
    "INSERT INTO user_workshop(id_workshop, id_user, note1, note2, note3, comment) VALUES ((SELECT id FROM workshop WHERE id = ?), (SELECT id FROM user WHERE id = ?), ?, ?, ?, ?)";
  return db.query(SQL, [
    userWorkshop.id_workshop,
    userWorkshop.id_user,
    userWorkshop.note1,
    userWorkshop.note2,
    userWorkshop.note3,
    userWorkshop.comment,
  ]);
};

const findAllUserWorkshop = () => {
  const SQL = "SELECT * FROM user_workshop";
  return db.query(SQL);
};

const findAllUserOpinion = () => {
  const SQL =
    "SELECT `id_workshop`, `id_user`, `note1`, `note2`, `note3`, `comment`, `id`, `lastname`, `firstname`, `email`, `birthday`, `adminStatus` FROM user_workshop INNER JOIN user ON user.id=user_workshop.id_user";
  return db.query(SQL);
};

const findOneUserWorkshop = (iduser, idworkshop) => {
  const SQL =
    "SELECT * FROM user_workshop WHERE id_user = ? AND id_workshop = ?";
  return db.query(SQL, [iduser, idworkshop]);
};

const updateUserWorkshop = (userWorkshop) => {
  const SQL =
    "UPDATE user_workshop SET note1 = ?, note2 = ?, note3 = ?, comment = ? WHERE id_user = ? AND id_workshop = ?";
  return db.query(SQL, [
    userWorkshop.note1,
    userWorkshop.note2,
    userWorkshop.note3,
    userWorkshop.comment,
    userWorkshop.id_user,
    userWorkshop.id_workshop,
  ]);
};

const deleteUserWorkshop = (iduser, idworkshop) => {
  const SQL = "DELETE FROM user_workshop WHERE id_user = ? AND id_workshop = ?";
  return db.query(SQL, [iduser, idworkshop]);
};

module.exports = {
  createUserWorkshop,
  findAllUserWorkshop,
  findAllUserOpinion,
  findOneUserWorkshop,
  updateUserWorkshop,
  deleteUserWorkshop,
};

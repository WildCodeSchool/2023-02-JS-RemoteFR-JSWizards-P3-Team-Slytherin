const db = require("./index");

const findAllGlossary = () => {
  return db.query(`select * from  glossary`);
};

const findOneGlossary = (id) => {
  return db.query(`select * from  glossary where id = ?`, [id]);
};

const createGlossary = (words) => {
  return db.query(`insert into glossary (word, wordDefinition) values (?, ?)`, [
    words.word,
    words.wordDefinition,
  ]);
};

const updateGlossary = (words) => {
  return db.query(
    `update glossary set word = ?, wordDefinition = ? where id = ?`,
    [words.word, words.wordDefinition, words.id]
  );
};

const deleteGlossary = (id) => {
  return db.query(`delete from glossary where id = ?`, [id]);
};

module.exports = {
  createGlossary,
  deleteGlossary,
  findAllGlossary,
  updateGlossary,
  findOneGlossary,
};

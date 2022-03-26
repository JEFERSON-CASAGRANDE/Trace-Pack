const connectionDb = require('../connection');

const create = async ({ name, email, password }) => {
  const result = await connectionDb.connection()
    .then((db) => db.collection('users'));

  const user = result.insertOne({ name, email, password });

  return {
    id: user.insertedId,
    name,
    email,
    role: '',
  };
};

const findUser = async (email) => {
  const result = await connectionDb.connection()
    .then((db) => db.collection('users'));

  const user = result.findOne({ email });

  return user;
};

module.exports = { create, findUser };

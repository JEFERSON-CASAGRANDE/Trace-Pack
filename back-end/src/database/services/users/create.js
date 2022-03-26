const modelUser = require('../../models/users/create');
const { emailAlreadyExist } = require('../../../utils/errors/index');

const create = async ({ name, email, password }) => {
  const userExist = await modelUser.findUser(email);
  if (userExist) {
    return emailAlreadyExist;
  }
  const { _id } = await modelUser.create({ name, email, password });

  return {
    user: {
      name,
      email,
      _id,
    },
  };
};

module.exports = { create };

const modelUser = require('../../models/users/create');
const { schemaUser } = require('../../../utils/joiValidate');

const create = async ({ name, email, password }) => {
  const { error } = schemaUser.validate({ name, email, password });
  if (error) {
    throw new Error(error.details[0].message);
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

const modelUser = require('../../models/users/create');
const { schemaLogin } = require('../../../utils/joiValidate');
const { createToken } = require('../../../utils/jsonWebToken');

const loginUser = async ({ email, password }) => {
  const { error } = schemaLogin.validate({ email, password });
  if (error) {
    throw new Error(error.details[0].message);
  }

  const user = await modelUser.findUser(email);

  const token = createToken(user);

  return {
    user: {
      token,
    },
  };
};

module.exports = { loginUser };

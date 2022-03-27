const modelUser = require('../../models/users/create');
const { invalidLogin } = require('../../../utils/errors');

module.exports = async (req, res, next) => {
  const { email } = req.body;

  const userExist = await modelUser.findUser(email);

  if (!userExist) {
    return res.status(404).send(invalidLogin);
  }
  return next();
};

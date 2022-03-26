const modelUser = require('../../models/users/create');
const { emailAlreadyExists } = require('../../../utils/errors');

const checkemail = async (email) => {
  const userExist = await modelUser.findUser(email);
  if (userExist) {
    return true;
  }
  return false;
};

module.exports = async (req, res, next) => {
  const { email } = req.body;

  if ((await checkemail(email))) {
    return res.status(400).send(emailAlreadyExists);
  }
  return next();
};

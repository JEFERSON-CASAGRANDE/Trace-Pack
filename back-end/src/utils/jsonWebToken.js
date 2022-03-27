const jwt = require('jsonwebtoken');

const secret = 'mysecret';

const createToken = (data) => {
  const token = jwt.sign(data, secret, { expiresIn: '24h', algorithm: 'HS256' });
  return token;
};

module.exports = { createToken };

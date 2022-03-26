const userService = require('../../services/users/create');

const createUser = async (req, res, next) => {
  try {
    const {
      name, email, password, _id,
    } = req.body;

    const user = await userService.create({
      name, email, password, _id,
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser };

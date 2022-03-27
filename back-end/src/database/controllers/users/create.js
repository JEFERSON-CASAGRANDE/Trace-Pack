const userService = require('../../services/users/create');

const createUser = async (req, res) => {
  try {
    const {
      name, email, password, _id,
    } = req.body;

    const user = await userService.create({
      name, email, password, _id,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUser };

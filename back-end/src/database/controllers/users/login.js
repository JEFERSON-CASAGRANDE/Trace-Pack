const userService = require('../../services/users/login');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUser({ email, password });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login };

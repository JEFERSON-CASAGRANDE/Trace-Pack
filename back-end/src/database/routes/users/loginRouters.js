const express = require('express');

const { login } = require('../../controllers/users/login');

const checkUser = require('../../middlewares/users/checkUser');

const router = express.Router();

router.post('/', checkUser, login);

module.exports = router;

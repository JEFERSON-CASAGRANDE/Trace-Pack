const express = require('express');

const { createUser } = require('../../controllers/users/create');

const checkEmail = require('../../middlewares/users/checkEmail');

const router = express.Router();

router.post('/', checkEmail, createUser);

module.exports = router;

const express = require('express');

const { createPoint } = require('../../controllers/features/createPoints');

// const checkEmail = require('../../middlewares/Points/checkEmail');

const router = express.Router();

router.post('/', createPoint);

module.exports = router;

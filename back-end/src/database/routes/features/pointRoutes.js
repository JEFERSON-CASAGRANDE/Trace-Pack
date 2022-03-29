const express = require('express');

const { createPoint } = require('../../controllers/features/createPoints');

const router = express.Router();

router.post('/', createPoint);

module.exports = router;

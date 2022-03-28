const express = require('express');

const { createPolygon } = require('../../controllers/features/createPolygon');

// const checkEmail = require('../../middlewares/Polygons/checkEmail');

const router = express.Router();

router.post('/', createPolygon);

module.exports = router;

const express = require('express');

const { listFeatures } = require('../../controllers/features/getFeatures');

// const checkEmail = require('../../middlewares/Features/checkEmail');

const router = express.Router();

router.get('/', listFeatures);

module.exports = router;

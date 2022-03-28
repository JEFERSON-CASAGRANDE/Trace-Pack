const featureService = require('../../services/features/createPoints');

const createPoint = async (req, res) => {
  try {
    const point = await featureService.create(req.body);

    res.status(201).json(point);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPoint };

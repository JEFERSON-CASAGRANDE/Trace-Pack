const featureService = require('../../services/features/createPolygon');

const createPolygon = async (req, res) => {
  try {
    const polygon = await featureService.create(req.body);

    res.status(201).json(polygon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPolygon };

const featureService = require('../../services/features/createPolygon');

const createPolygon = async (req, res) => {
  try {
    const { name, cordinate } = req.body;
    const polygon = await featureService.create({ name, cordinate });

    res.status(201).json(polygon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPolygon };

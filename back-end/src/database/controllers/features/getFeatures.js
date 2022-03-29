const featureService = require('../../services/features/getPoints');

const listFeatures = async (_req, res) => {
  try {
    const result = await featureService.list();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { listFeatures };

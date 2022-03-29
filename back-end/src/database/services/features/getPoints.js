const modelFeature = require('../../models/features/getFeatures');

const list = async () => {
  const result = await modelFeature.getFeatures();

  return result;
};

module.exports = { list };

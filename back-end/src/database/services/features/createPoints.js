const modelFeature = require('../../models/features/createPoints');

const create = async (name, lat, lng) => {
  const result = await modelFeature.create(name, lat, lng);

  console.log('service:', result);

  return result;
};

module.exports = { create };

const modelFeature = require('../../models/features/createPolygon');

const create = async (name, polygon) => {
  console.log('data:', name);
  const result = await modelFeature.create(name, polygon);

  console.log('service:', result);
  return {
    result,
  };
};

module.exports = { create };

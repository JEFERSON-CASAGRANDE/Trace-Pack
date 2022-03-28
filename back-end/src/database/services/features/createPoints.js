const modelFeature = require('../../models/features/createPoints');

// create points in database of array of objects
const create = async (name, lat, lng) => {
  const result = await modelFeature.create(name, lat, lng);
  // const result = await modelFeature.create(name, lat, lng);

  console.log('service:', result);

  return result;
};

module.exports = { create };

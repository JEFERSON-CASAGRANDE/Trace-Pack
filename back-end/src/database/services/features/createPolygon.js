const modelFeature = require('../../models/features/createPolygon');

const create = async ({ name, cordinate: [lat, lng] }) => {
  const data = { name, cordinate: [lat, lng] };

  console.log('data:', name);
  const result = await modelFeature.create(data);

  console.log('service:', result);
  return {
    result,
  };
};

module.exports = { create };

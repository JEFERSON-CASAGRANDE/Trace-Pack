const modelFeature = require('../../models/features/createPoints');

const create = async ({ name, lat, lng }) => {
  const data = [{ name, lat, lng }];
  const result = await modelFeature.create(data);

  console.log(result);
  return {
    result,
  };
};

module.exports = { create };

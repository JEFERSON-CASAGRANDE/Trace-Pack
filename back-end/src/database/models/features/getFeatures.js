const connectionDb = require('../connection');

const getFeatures = async () => {
  const result = await connectionDb.connection()
    .then((db) => db.collection('features'));

  const points = await result.find().toArray();

  return points;
};

module.exports = { getFeatures };

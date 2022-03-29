const GeoJSON = require('geojson');
const connectionDb = require('../connection');

const create = async (data) => {
  const result = await connectionDb.connection()
    .then((db) => db.collection('features'));

  const polygon = await result.insertOne(GeoJSON.parse(data, { Polygon: 'polygon' }));
  return polygon;
};

module.exports = { create };

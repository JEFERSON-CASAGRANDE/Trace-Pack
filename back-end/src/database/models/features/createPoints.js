const GeoJSON = require('geojson');
const connectionDb = require('../connection');

const create = async (data) => {
  const result = await connectionDb.connection()
    .then((db) => db.collection('features'));

  console.log('data:', data);
  const point = await result.insertOne(GeoJSON.parse(data, { Point: ['lat', 'lng'] }));

  // console.log('console model', point);

  return { point };
};

module.exports = { create };

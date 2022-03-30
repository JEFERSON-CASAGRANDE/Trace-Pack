import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { getAllFeatures } from '../../utils/axios';

function MyMap() {
  const [features, setFeatures] = React.useState([]);

  React.useEffect(async () => {
    const { data } = await getAllFeatures();
    setFeatures(data);
  }, []);

  features.map((feature) => console.log('feature:', feature));
  console.log('features:', features);

  return (
    <MapContainer style={{ height: '80vh' }} center={[20, 100]} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <GeoJSON
        data={features.features}
        style={{
          color: '#ff7800',
          weight: 2,
          fillColor: '#ff7800',
          fillOpacity: 0.5,
        }}
      /> */}
    </MapContainer>
  );
}

export default MyMap;

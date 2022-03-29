import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';

function MyMap() {
  return (
    <MapContainer center={[-23.5489, -46.6388]} zoom={13}>
      <GeoJSON
        // data={require('./data/points.json')}
        style={{
          color: '#ff7800',
          weight: 2,
          fillColor: '#ff7800',
          fillOpacity: 0.5,
        }}
      />
    </MapContainer>
  );
}

export default MyMap;

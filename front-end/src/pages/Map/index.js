import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { Map, Marker } from 'pigeon-maps';
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

    <Map
      zoom={5}
      width={1920}
      height={1080}
      onViewportChanged={(viewport) => console.log('viewport:', viewport)}
    >
      <Marker>
        <GeoJSON
          data={features.map((feature) => feature.geometry)}
          style={{
            color: '#ff7800',
            weight: 2,
            fillColor: '#ff7800',
            fillOpacity: 0.5,
          }}
        />

      </Marker>
    </Map>

  );
}

export default MyMap;

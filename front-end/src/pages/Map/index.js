import React from 'react';
// import { GeoJSON } from 'react-leaflet';
import { Map, GeoJson } from 'pigeon-maps';
import { getAllFeatures } from '../../utils/axios';
import NavBar from '../../components/NavBar/NavBar';

function MyMap() {
  const [features, setFeatures] = React.useState([]);

  React.useEffect(async () => {
    const { data } = await getAllFeatures();
    setFeatures(data);
  }, []);

  return (
    <>
      <NavBar />
      <Map
        zoom={5}
        width={1920}
        height={835}
        onViewportChanged={(viewport) => console.pop('viewport:', viewport)}
      >
        {features.map((feature) => (
          <GeoJson
            key={feature.id}
            data={feature}
          />
        ))}
      </Map>
    </>
  );
}

export default MyMap;

import React from 'react';
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
        width={1080}
        height={835}
        center={[-15.78, -47.92]}
        onViewportChanged={(viewport) => console.pop('viewport:', viewport)}
      >
        {features.map((feature) => (
          <GeoJson
            key={feature.id}
            data={feature}
            style={{
              fill: '#d4e6ec99',
              strokeWidth: '1',
              stroke: 'white',
              r: '20',
            }}
            onClick={() => alert(`${feature.features[0].properties.name}`)}
          />
        ))}
      </Map>
    </>
  );
}

export default MyMap;

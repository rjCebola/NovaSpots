// MapComponent.js
import React, { useEffect } from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import { useMapEvents } from 'https://cdn.esm.sh/react-leaflet/hooks'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({viewProfile , setViewProfile}) => {
  const bounds = [[0, 0], [1665, 1509]];

  useEffect(() => {
    const zoomControl = document.querySelector('.leaflet-control-zoom');
    if (zoomControl) {
      zoomControl.classList.add('hidden');
    }
  }, []);

  return (
    <MapContainer
      center={[754.5, 832.5]}
      zoom={-1}
      style={{ height: '100vh', width: '100%', backgroundColor: 'white'}}
      crs={L.CRS.Simple}
      maxBounds={bounds}
      minZoom={-2}
      maxZoom={2}
      bounds={bounds}
    >
      <ImageOverlay
        url="/campus.jpg"
        bounds={bounds}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </MapContainer>
  );
};

export default MapComponent;
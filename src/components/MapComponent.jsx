// MapComponent.js
import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  // Define the bounds for the image overlay (latitude/longitude pairs)
  const bounds = [[0, 0], [1509, 1665]]; // Adjust based on your image scale

  return (
    <MapContainer
      center={[754.5, 832.5]} // Center point of the image; adjust as needed
      zoom={2} // Adjust zoom level as needed for optimal display
      style={{ height: '100vh', width: '100%' }}
      crs={L.CRS.Simple} // Use a simple coordinate reference system for custom images
    >
      <ImageOverlay
        url="/campus.jpg" // Ensure this path is correct and accessible
        bounds={bounds}
      />
    </MapContainer>
  );
};

export default MapComponent;
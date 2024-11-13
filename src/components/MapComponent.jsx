// MapComponent.js
import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css'; 

const MapComponent = () => {
  // Define the bounds for the image overlay (latitude/longitude pairs)
  const bounds = [[0, 0], [1665, 1509]]; // Adjust based on your image scale

  return (
    <MapContainer
      center={[754.5, 832.5]} // Center point of the image; adjust as needed
      zoom={-1} // Adjust zoom level as needed for optimal display
      style={{ height: '100vh', width: '100%', backgroundColor: 'white'}}
      crs={L.CRS.Simple} // Use a simple coordinate reference system for custom images
      maxBounds={bounds} 
      minZoom={-2}
      maxZoom={2}
      bounds={bounds}
    >
      <ImageOverlay
        url="/campus.jpg" // Ensure this path is correct and accessible
        bounds={bounds}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Maintain aspect ratio
      />
    </MapContainer>
  );
};

export default MapComponent;
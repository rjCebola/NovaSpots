// MapComponent.js
import React, { useEffect } from 'react';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CampusMapAreasOfInterest from './CampusMapAreasOfInterest';


function MapComponentHelper({ viewProfile, setViewProfile }) {
   /* useMapEvents({
    click: (e) => {

    },
    drag: () => {
      if (viewProfile) setViewProfile(false)
    }
  });  */
  return null;
}



const MapComponent = ({ viewProfile, setViewProfile, setState, setBuilding, state }) => {
  const bounds = [[0, 0], [1665, 1509]];

  useEffect(() => {
    const zoomControl = document.querySelector('.leaflet-control-zoom');
    if (zoomControl) {
      zoomControl.classList.add('hidden');
    }
  }, []);

  var map = "";
  if(state === "map") {
    map = "/campus.jpg";
  }
  else {
    map = "/campus.jpg" // change to the correct map
  }

  return (
    <MapContainer
      center={[754.5, 832.5]}
      zoom={-1}
      style={{ height: '100vh', width: '100%', backgroundColor: 'white' }}
      crs={L.CRS.Simple}
      maxBounds={bounds}
      minZoom={-2}
      maxZoom={2}
      bounds={bounds}
      attributionControl={false}
    >
      <ImageOverlay
        url={map}
        bounds={bounds}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
      <MapComponentHelper viewProfile={viewProfile} setViewProfile={setViewProfile} />
      <CampusMapAreasOfInterest setState={setState} setBuilding={setBuilding}/>
    </MapContainer>
  );
};

export default MapComponent;
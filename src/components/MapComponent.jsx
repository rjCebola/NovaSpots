// MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, ImageOverlay, useMap, Marker, Tooltip } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CampusMapAreasOfInterest from './AreasInterest/CampusMapAreasOfInterest';
import AreasOfInterst from './AreasInterest/AreasOfInterest';
import ReactDOMServer from 'react-dom/server';
import { getFriendsWithLocation } from "../users";


function MapComponentHelper({ viewProfile, setViewProfile }) {
/*    useMapEvents({
    load: () =>{
      console.log("loading");
    },
    click: (e) => {
      console.log("click");
    },
    drag: () => {
      if (viewProfile) setViewProfile(false)
    }
  });   */
  return null;
}

const foodPinLocations = [
  { x: 1000, y: 990, name: "Canteen" },
  { x: 1040, y: 570, name: "Tanto Faz" },
  { x: 730, y: 815, name: "My Spot" },
];


const MapComponent = ({ viewProfile, setViewProfile, state, setState, setBuilding, building, setMapPopUps, setRoomPop, layerSelected, selectedFriend }) => {
  const bounds = [[0, 0], [1665, 1509]];

  const [friends, setFriends] = useState(
    getFriendsWithLocation()
  );

  useEffect(() => {
    const zoomControl = document.querySelector('.leaflet-control-zoom');
    if (zoomControl) {
      zoomControl.classList.add('hidden');
    }
    setFriends(getFriendsWithLocation());
  }, []);

  var map = "";
  if(state === "map") {
    map = "/campus_edited.jpg";
  }
  else {
    map = "/edificio7_andar0.jpg" // falta mudar para os varios mapas e nao so este
  }

  const handleFoodPinClick = (pin) => {
    setMapPopUps("canteen");
  };

  const handleFriendPinClick = (pin) => {
    //setMapPopUps("canteen");
    console.log(pin.name);
  };

  const filteredFriends = friends.filter(pin => {
      if (selectedFriend) {
        return pin.name === selectedFriend.name;
      }
      if (layerSelected === "friends") {
        return true;
      }
      return false;
  });

  return (
    <MapContainer
      center={[900, 900]}
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

    {state === "map" && layerSelected === "food" && foodPinLocations.map((pin, index) => (
        <Marker
          key={index}
          position={[pin.x, pin.y]}
          icon={L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color:transparent;width:25px;height:20px;"></div>`,
          })}
          eventHandlers={{
            click: () => {
              handleFoodPinClick(pin);
            },
          }}
        >
          <Tooltip
            direction="top"
            permanent
            className="bg-blue"
            offset={[0, 0]} // Adjusts tooltip position
            interactive
          >
            <div>
              <strong style={{ fontFamily: 'Poppins, sans-serif' }}>{pin.name}</strong>
              <br />
              <span style={{ fontSize: '12px', color: 'gray', fontFamily: 'Poppins, sans-serif' }}>Check the menu</span>
            </div>
          </Tooltip>
          
        </Marker>
      ))}

    {state === "map" && layerSelected === "friends" && filteredFriends.map((pin, index) => (
        <Marker
          key={index}
          position={[pin.campus_x, pin.campus_y]}
          icon={L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color:transparent;width:25px;height:20px;"></div>`,
          })}
          eventHandlers={{
            click: () => {
              handleFriendPinClick(pin);
            },
          }}
        >
          <Tooltip
            direction="top"
            permanent
            className="bg-white border border-gray-300 rounded shadow-md text-sm p-1"
          >
            {pin.name}
          </Tooltip>
        </Marker>
      ))}

      <MapComponentHelper viewProfile={viewProfile} setViewProfile={setViewProfile} />
      <AreasOfInterst state={state} setState={setState} building={building} setBuilding={setBuilding} setMapPopUps={setMapPopUps} setRoomPop={setRoomPop}/>
    </MapContainer>
  );
};

export default MapComponent;
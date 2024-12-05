// MapComponent.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapContainer, ImageOverlay, useMap, Marker, Tooltip, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import AreasOfInterst from './AreasInterest/AreasOfInterest';
import { getFriendsWithLocation, getFriendByName } from "../users";
import { faBus, faTrainTram, faUserCircle } from '@fortawesome/free-solid-svg-icons';


const MapComponentHelper = ({ selectedFriend, state, layerSelected, setMapPopUps, setViewProfile, setRoomPop, roomPop, viewProfile, mapPopUps }) => {
  const map = useMap();

  useMapEvents({
    click: () => {
      if(mapPopUps !== "map") setMapPopUps("map");
      if(viewProfile) setViewProfile(false);
      if(roomPop !== 0) setRoomPop(0);
  }

  })

  useEffect(() => {
    if (state === "map") {
      if (selectedFriend) {
        map.setView([selectedFriend.campus_x, selectedFriend.campus_y], 0);
      } else if (layerSelected === "transport") {
        map.setView([900, 900], -2);
      } else {
        map.setView([900, 900], -1); // Default map view
      }
    } else if (state === "building") {
      if (selectedFriend && selectedFriend.building_x !== 0 && selectedFriend.building_y !== 0) {
        map.setView([selectedFriend.building_x, selectedFriend.building_y], 0);
      } else {
        map.setView([1055, 760], -1.5); // Default building view
      }
    }
  }, [selectedFriend, layerSelected, state, map]);

}

const foodPinLocations = [
  { x: 1000, y: 990, name: "Canteen" },
  { x: 1040, y: 570, name: "Tanto Faz" },
  { x: 730, y: 815, name: "My Spot" },
];

const transportPinLocations = [
  { x: 1570, y: 460, name: "Tram" },
  { x: 610, y: 1440, name: "Bus" }
]

const MapComponent = ({ viewProfile, setViewProfile, state, setState, setBuilding, building, setMapPopUps, setRoomPop, selectedFriend, setSelectedFriend, layerSelected, currFoodCourt, setFoodCourt, setSelectedTransport, roomPop, mapPopUps }) => {
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
  if (state === "map") {
    map = "/campus_edited.jpg";
  }
  else {
    if (building[0] === 7) {
      if (building[1] === 1) {
        map = "/edificio7_andar0.jpg"
      }
      else if (building[1] === 2) {
        map = "/edificio7_andar2.jpg"
      }
      else map = "/edificio7_andar3.jpg"
    }
  }

  const handleFoodPinClick = (pin) => { // n deve precisar de pin
    setMapPopUps("canteen");
    if(viewProfile) setViewProfile(false)
    setFoodCourt(pin.name)
  };

  const handleFriendPinClick = (pin) => {
    setSelectedFriend(getFriendByName(pin.name));
    if(viewProfile) setViewProfile(false)
  };

  const handleTransportPinClick = (pin) => {
    setMapPopUps("transport");
    setSelectedTransport(pin.name);
    if(viewProfile) setViewProfile(false)
  };

  const filteredFriends = friends.filter(pin => {
    if (selectedFriend) {
      return pin.name === selectedFriend.name;
    }

    return true;
  });

  const filteredBuildingFriends = friends.filter(pin => {
    var friend = getFriendByName(pin.name);
    if (friend.building_x !== 0 && friend.building_y !== 0) {
      if (selectedFriend) {
        return pin.name === selectedFriend.name;
      }

      return true;
    }

    return false;
  });

  return (
    <MapContainer
      center={[900, 900]}
      zoom={-1}
      style={{ height: '100vh', width: '100%', backgroundColor: 'white'}}
      crs={L.CRS.Simple}
      maxBounds={[[-300, -300], [1965, 1809]]}
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

    {state === "map" && layerSelected === "transport" && transportPinLocations.map((pin, index) => (
        <Marker
          key={index}
          position={[pin.x, pin.y]}
          icon={L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color:transparent;width:25px;height:20px;"></div>`,
          })}
          eventHandlers={{
            click: () => {
              handleTransportPinClick(pin);
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
            <div className="flex items-center justify-center space-x-1">
            {pin.name === "Tram" ? (
              <FontAwesomeIcon icon={faTrainTram} className="h-5 text-[#0462b9]" />
            ) : (
              <FontAwesomeIcon icon={faBus} className="h-4 text-[#0462b9]" />
            )}
              <span>{pin.name}</span>
            </div>
          
          </Tooltip>
          
        </Marker>
      ))}

    {state === "map" && layerSelected === "friends" && filteredFriends.map((pin, index) => (
        pin.campus_x && (
          <Marker
            key={index}
            position={[pin.campus_x, pin.campus_y]}
            icon={L.divIcon({
              className: 'custom-div-icon',
              html: `<div style="background-color:transport;width:25px;height:20px;"></div>`,
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
              <div className="flex items-center justify-center space-x-1">
                <FontAwesomeIcon icon={faUserCircle} className="h-5" />
                <span>{pin.name}</span>
              </div>
            </Tooltip>
          </Marker>
        )
      ))}

      {state === "building" && layerSelected === "friends" && building[1] === 1 && filteredBuildingFriends.map((pin, index) => (
        pin.campus_x && (
          <Marker
            key={index}
            position={[pin.building_x, pin.building_y]}
            icon={L.divIcon({
              className: 'custom-div-icon',
              html: `<div style="background-color:transparent;width:0px;height:0px;pointer-events:none;"></div>`,
            })}
            interactive={false}
          >
            <Tooltip
              direction="top"
              permanent
              className="bg-white border border-gray-300 rounded shadow-md text-sm p-1"
              interactive={false}
              style={{ pointerEvents: 'none' }}
            >
              <div className="flex items-center justify-center space-x-1">
                <FontAwesomeIcon icon={faUserCircle} className="h-5" />
                <span>{pin.name}</span>
              </div>
            </Tooltip>
          </Marker>
        )
      ))}

      <MapComponentHelper selectedFriend={selectedFriend} state={state} layerSelected={layerSelected}  setMapPopUps={setMapPopUps} setViewProfile={setViewProfile} setRoomPop={setRoomPop} roomPop={roomPop} viewProfile={viewProfile} mapPopUps={mapPopUps}/>
      <AreasOfInterst state={state} setState={setState} building={building} setBuilding={setBuilding} setMapPopUps={setMapPopUps} setRoomPop={setRoomPop} setFoodCourt={setFoodCourt} viewProfile={viewProfile} setViewProfile={setViewProfile}/>
    </MapContainer>
  );
};

export default MapComponent;
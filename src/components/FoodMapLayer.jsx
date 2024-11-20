import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Generate a custom Leaflet Icon
const createLocationDotIcon = () =>
  L.divIcon({
    className: "", // Empty class to remove default Leaflet styles
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    html: `<div class="text-red-500 text-2xl">
            <i class="fas fa-location-dot"></i>
          </div>`,
  });

// Sample pin data
const pinLocations = [
  { lat: 51.505, lng: -0.09, name: "Location A", info: "Details about Location A" },
  { lat: 51.51, lng: -0.1, name: "Location B", info: "Details about Location B" },
  { lat: 51.52, lng: -0.08, name: "Location C", info: "Details about Location C" },
];

function FoodMapLayer() {
  const [selectedPin, setSelectedPin] = useState(null);

  return (
    <div className="relative">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

        {/* Render Pins */}
        {pinLocations.map((pin, index) => (
          <Marker
            key={index}
            position={[pin.lat, pin.lng]}
            icon={createLocationDotIcon()}
            eventHandlers={{
              click: () => {
                handlePinClick(pin); // handles pin click
              },
            }}
          >
            {/* Tooltip */}
            <Tooltip
              direction="top"
              permanent
              className="bg-white border border-gray-300 rounded shadow-md text-sm p-1"
            >
              {pin.name}
            </Tooltip>
          </Marker>
        ))}

        {/* Render Popup when a pin is clicked */}
        {selectedPin && (
          <Popup
            position={[selectedPin.lat, selectedPin.lng]}
            onClose={() => setSelectedPin(null)} // Close the popup
            className="bg-white border border-gray-300 rounded shadow-md p-2"
          >
            <div className="text-sm">
              <h3 className="font-bold">{selectedPin.name}</h3>
              <p>{selectedPin.info}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
}

export default FoodMapLayer;

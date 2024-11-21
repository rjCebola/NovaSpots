import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';


function handleProfileClick(viewProfile, setViewProfile) {
    setViewProfile(!viewProfile);
}


function handleLogoClick(setState, setLayerSelected, setBuilding, setRoomPop, setMapPopUps) {
    setState("map");
    setLayerSelected("");
    setBuilding([0,0]);
    setRoomPop(0);
    setMapPopUps("map");
}

function Header({ viewProfile, setViewProfile, setState, setBuilding, setRoomPop, setMapPopUps, setLayerSelected }) {

    return (
        <div className="w-full flex items-center z-[999] justify-between p-2 bg-white shadow-md">
            <div className="flex items-center">
                <img onClick={() => handleLogoClick(setState,setLayerSelected, setBuilding, setRoomPop, setMapPopUps,)} src="/NovaSpots_logo.jpg" alt="NovaSpots Logo" className="h-12 mr-2" />
                <h1 className="text-2xl font-bold font-poppins" style={{ color: '#0463ba' }}>NovaSpots</h1>
            </div>
            <FontAwesomeIcon icon={faUserCircle} className="text-[#0462b9] h-10 pr-2" onClick={() => handleProfileClick(viewProfile, setViewProfile)} />
        </div>)
}

export default Header;
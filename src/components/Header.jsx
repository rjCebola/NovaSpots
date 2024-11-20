import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';


function handleProfileClick(viewProfile, setViewProfile) {
    setViewProfile(!viewProfile);
}


function handleLogoClick(setState, setIsFriendsSelected, setBuilding, setRoomPop, setMapPopUps, setIsFoodLayerSelected) {
    setState("map");
    setIsFriendsSelected(false);
    setBuilding([0,0]);
    setRoomPop(0);
    setMapPopUps("map");
    setIsFoodLayerSelected(false);
}

function Header({ viewProfile, setViewProfile, setState, setIsFriendsSelected, setBuilding, setRoomPop, setMapPopUps, setIsFoodLayerSelected }) {

    return (
        <div className="flex items-center justify-between p-2 bg-white border-b-2">
            <div className="flex items-center">
                <img onClick={() => handleLogoClick(setState, setIsFriendsSelected, setBuilding, setRoomPop, setMapPopUps, setIsFoodLayerSelected)} src="/NovaSpots_logo.jpg" alt="NovaSpots Logo" className="h-12 mr-2" />
                <h1 className="text-2xl font-bold font-poppins" style={{ color: '#0463ba' }}>NovaSpots</h1>
            </div>
            <FontAwesomeIcon icon={faUserCircle} className="text-[#0462b9] h-10 pr-2" onClick={() => handleProfileClick(viewProfile, setViewProfile)} />
        </div>)
}

export default Header;
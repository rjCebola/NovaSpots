import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle , faUserFriends} from '@fortawesome/free-solid-svg-icons';


function handleProfileClick(viewProfile, setViewProfile) {
    setViewProfile(!viewProfile);
}

function handleFriendsClick(setState, setViewProfile) {
    setState("friends");
    setViewProfile(false);
}

function handleLogoClick(setState, setLayerSelected, setBuilding, setRoomPop, setMapPopUps, setViewProfile) {
    setState("map");
    setLayerSelected("");
    setBuilding([0,0]);
    setRoomPop(0);
    setMapPopUps("map");
    setViewProfile(false)
}



function Header({ viewProfile, setViewProfile, setState, setBuilding, setRoomPop, setMapPopUps, setLayerSelected }) {
    const [friendsScale, setFriendsScale] = useState('scale(1)');
    const [logoScale, setLogoScale] = useState('scale(1)');
    const [settingsScale, setSettingsScale] = useState('scale(1)');

    const handleButtonClick = (button) => {
        handleShrinkStart(button);
        setTimeout(() => {
            handleShrinkEnd(button);
        }, 75);
    }
    const handleShrinkStart = (button) => {
        switch(button){
            case 'friends': setFriendsScale('scale(0.85)');break;
            case 'logo': setLogoScale('scale(0.9)');break;
            default: setSettingsScale('scale(0.9)');
        }
    }
    const handleShrinkEnd = (button) => {
        switch(button){
            case 'friends': setFriendsScale('scale(1)');break;
            case 'logo': setLogoScale('scale(1)');break;
            default: setSettingsScale('scale(1)');
        }
    }
    return (
        <div className="w-full flex items-center z-[999] justify-between p-2 bg-white shadow-md">
            <div className="flex items-center">
                <img onClick={() => {handleButtonClick('logo');handleLogoClick(setState,setLayerSelected, setBuilding, setRoomPop, setMapPopUps,setViewProfile)}} src="/NovaSpots_logo.jpg" alt="NovaSpots Logo" className="h-12 mr-2" 
                style={{transform: logoScale, transition: '0.075s' }}
                />
                <h1 className="text-2xl font-bold font-poppins" style={{ color: '#0463ba' }}>NovaSpots</h1>
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faUserFriends} className="text-[#0462b9] h-5 mr-5" 
                    onClick={() => {handleButtonClick('friends');handleFriendsClick(setState, setViewProfile)}}
                    style={{transform: friendsScale, transition: '0.075s'}}/>
                <FontAwesomeIcon icon={faUserCircle} className="text-[#0462b9] h-10 pr-2" 
                    onClick={() => {handleButtonClick('settings');handleProfileClick(viewProfile, setViewProfile)}} 
                    style={{transform: settingsScale, transition: '0.075s'}}/>
            </div>
        </div>
    )
}

export default Header;
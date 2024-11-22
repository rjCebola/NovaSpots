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

function handleLogoClick(setState, setLayerSelected, setBuilding, setRoomPop, setMapPopUps) {
    setState("map");
    setLayerSelected("");
    setBuilding([0,0]);
    setRoomPop(0);
    setMapPopUps("map");
}



function Header({ viewProfile, setViewProfile, setState, setBuilding, setRoomPop, setMapPopUps, setLayerSelected }) {
    const [friendsScale, setFriendsScale] = useState('scale(1)');
    const [logoScale, setLogoScale] = useState('scale(1)');
    const [settingsScale, setSettingsScale] = useState('scale(1)');

    const handleShrinkStart = (button) => {
        switch(button){
            case 'friends': setFriendsScale('scale(0.8)');break;
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
                <img onClick={() => handleLogoClick(setState,setLayerSelected, setBuilding, setRoomPop, setMapPopUps,)} src="/NovaSpots_logo.jpg" alt="NovaSpots Logo" className="h-12 mr-2" 
                style={{transform: logoScale, transition: '0.2s' }}
                onTouchStart={() => handleShrinkStart('logo')}
                onTouchEnd={() => handleShrinkEnd('logo')}/>
                <h1 className="text-2xl font-bold font-poppins" style={{ color: '#0463ba' }}>NovaSpots</h1>
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faUserFriends} className="text-[#0462b9] h-5 mr-5" onClick={() => handleFriendsClick(setState, setViewProfile)} 
                    style={{transform: friendsScale, transition: '0.3s'}}
                    onTouchStart={() => handleShrinkStart('friends')}
                    onTouchEnd={() => handleShrinkEnd('friends')}/>
                <FontAwesomeIcon icon={faUserCircle} className="text-[#0462b9] h-10 pr-2" onClick={() => handleProfileClick(viewProfile, setViewProfile)} 
                    style={{transform: settingsScale, transition: '0.2s'}}
                    onTouchStart={() => handleShrinkStart('settings')}
                    onTouchEnd={() => handleShrinkEnd('settings')}/>
            </div>
        </div>
    )
}

export default Header;
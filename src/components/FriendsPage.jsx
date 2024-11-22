import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faPlus, faMapLocation, faMap } from '@fortawesome/free-solid-svg-icons'; 
import AddFriendPopup from './AddFriendPopUp';
import { getFriendsWithLocation } from "../users";


const FriendsPage = ( { setState, setSelectedFriend, setLayerSelected } ) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [addFriendsPopupVisible, setAddFriendsPopupVisible] = useState(false);
    const [scaleMapButton, setScaleMapButton] = useState('scale(1)')
    const [scalePlusButton, setScalePlusButton] = useState('scale(1)')
    const [friends, setFriends] = useState(
        getFriendsWithLocation()
    );

    const filteredFriends = friends.filter(friend =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePlusButtonClick = () => {
        setAddFriendsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setAddFriendsPopupVisible(false);
    };

    const handleFriendClick = (friend) => {
        return () => {
        setSelectedFriend(friend);
        setState("map");
        setLayerSelected("friends");
        };
      };

    const handleButtonClick = (button) => {
        handleShrinkStart(button);
        setTimeout(() => {
            handleShrinkEnd(button);
        }, 75);
    }
    const handleShrinkStart = (button) => {
        if(button === "mapButton"){
            setScaleMapButton('scale(0.9)');
        }else{
            setScalePlusButton('scale(0.9)');
        }
        
    }
    const handleShrinkEnd = (button) => {
        if(button === "mapButton"){
            setScaleMapButton('scale(1)');
        }else{
            setScalePlusButton('scale(1)');
        }
    }

    return (
        <div className="bg-white p-4 rounded flex flex-col items-center">
            
            <h2 className="text-2xl font-bold mt-20 mb-7 rounded-2xl p-2 bg-[#d6ebff] text-[#0462b9] w-60 text-center">Friends</h2>

            <div className="flex items-center mb-4 w-full max-w-md relative">
                <FontAwesomeIcon
                    icon={faSearch}
                    size="lg"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                    type="text"
                    placeholder="Search friend..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 p-2 border border-gray-300 rounded-2xl outline-none focus:ring focus:ring-[#0462b9]"
                />
            </div>

            {filteredFriends.map((friend, index) => (
                <div key={index} className="flex items-center mb-4 w-full max-w-md">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-lg font-bold">{friend.name}</p>
                        {friend.location && <p className="text-sm text-gray-500">Studying at {friend.location}</p>}
                    </div>
                    {friend.location && (
                        <button onClick={handleFriendClick(friend)} className="ml-auto p-2 text-[#0462b9]">
                            <FontAwesomeIcon icon={faMapLocation} style={{ fontSize: '1.75rem' }} />
                        </button>
                    )}
                </div>
            ))}

            <button className="flex fixed justify-center items-center bottom-5 right-5 w-12 h-12 rounded-full bg-[#d6ebff] text-[#0462b9] text-3xl shadow-lg z-[999]" 
                onClick={() => {handleButtonClick("mapButton");handlePlusButtonClick()}}
                style={{transform : scaleMapButton, transition:'0.1s'}}>
                <FontAwesomeIcon icon={faPlus} />
            </button>


            <button className="flex fixed justify-center items-center bottom-5 left-5 w-12 h-12 rounded-full bg-[#d6ebff] text-[#0462b9] text-3xl shadow-lg z-[999]" 
                onClick={() => {handleButtonClick("plusButton");setTimeout(() => {setState("map")}, 125)}}
                style={{transform : scalePlusButton, transition:'0.1s'}}>
                <FontAwesomeIcon icon={faMap} />
            </button>
            
            {addFriendsPopupVisible && <AddFriendPopup onClose={handleClosePopup} setFriends={setFriends} friends={friends} />} 

        </div>
    );
};

export default FriendsPage;
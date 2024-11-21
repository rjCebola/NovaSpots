import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faPlus, faMapMarkerAlt, faMapLocation } from '@fortawesome/free-solid-svg-icons'; 
import AddFriendPopup from './AddFriendPopUp';
import { getFriends, getFriendsWithLocation } from "../users";

const FriendsPage = ( { setState, setSelectedFriend, setLayerSelected } ) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [friends, setFriends] = useState(
        getFriendsWithLocation()
    );

    const filteredFriends = friends.filter(friend =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const [showSearch, setShowSearch] = useState(false);

    const handleSearchIconClick = () => {
        setShowSearch(!showSearch);
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleButtonClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    const handleFriendClick = (friend) => {
        return () => {
        setSelectedFriend(friend);
        setState("map");
        setLayerSelected("friends");
        };
      };

    return (
        <div className="bg-white p-4 rounded flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3 rounded-2xl p-2 bg-[#d6ebff] text-[#0462b9] w-60 text-center">Friends</h2>

            <div className="flex items-center mb-4 w-full max-w-md">
                {showSearch && (
                    <input
                        type="text"
                        placeholder="Search friend..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full p-2 border border-gray-300 rounded-2xl mr-3 outline-none focus:ring focus:ring-[#0462b9]"
                    />
                )}
                <FontAwesomeIcon icon={faSearch} size="2x" onClick={handleSearchIconClick} className="cursor-pointer h-8 mr-2 ml-auto text-[#0462b9]" />
            </div>

            {filteredFriends.map((friend, index) => (
                <div key={index} className="flex items-center mb-4 w-full max-w-md">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-lg font-bold">{friend.name}</p>
                        <p className="text-sm text-gray-500">Studying at {friend.location}</p>
                    </div>
                    <button onClick={handleFriendClick(friend)} className="ml-auto p-2 text-[#0462b9]">
                        <FontAwesomeIcon icon={faMapLocation} style={{ fontSize: '1.75rem' }} />
                    </button>
                </div>
            ))}

            <button className="flex fixed justify-center items-center bottom-5 right-5 w-12 h-12 rounded-full bg-[#d6ebff] text-[#0462b9] text-3xl shadow-lg z-[999]" onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {isPopupVisible && <AddFriendPopup onClose={handleClosePopup} setFriends={setFriends} friends={friends} />}
        </div>
    )
}

export default FriendsPage;
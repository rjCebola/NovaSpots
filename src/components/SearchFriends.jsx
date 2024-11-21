import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { getFriendsWithLocation } from "../users";

function SearchFriends( { selectedFriend, setSelectedFriend } ) {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (selectedFriend) {
            setInputValue(selectedFriend.name);
            setShowSearchBar(true);
        }
    }, [selectedFriend]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.trim() === '') {
            setSuggestions([]);
            return;
        }

        const friends = getFriendsWithLocation();
        const filteredFriends = friends.filter(friend =>
            friend.name.toLowerCase().includes(value.toLowerCase()) ||
            friend.clipId.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredFriends);
    };

    const handleSuggestionClick = (friend) => {
        setSelectedFriend(friend);
        setInputValue(friend.name);
        setSuggestions([]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleConfirmInput();
        }
    };

    const handleConfirmInput = () => {
        if (suggestions.length === 1) {
            handleSuggestionClick(suggestions[0]);
        }
    };

    const handleClearSelection = () => {
        setSelectedFriend(null);
        setInputValue('');
    };

    return (
        <div className="flex fixed justify-center items-center top-20 right-5 z-[998]">
            <button
                onClick={() => setShowSearchBar(!showSearchBar)}
                className="w-12 h-12 rounded-full bg-white text-2xl shadow-lg"
            >
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-[#0462b9] h-7 cursor-pointer"
                />
            </button>
            {showSearchBar && (
                <div className="relative">
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className="border rounded-2xl px-4 py-2 pr-10 ml-2 outline-none focus:ring focus:ring-[#0462b9] w-40"
                            placeholder="Search..."
                        />
                        {selectedFriend && (
                            <button
                                onClick={handleClearSelection}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                            >
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-700"/>
                            </button>
                        )}
                    </div>
                    {suggestions.length > 0 && (
                        <ul className="absolute left-2 mt-1 border rounded-lg w-40 bg-white shadow-md max-h-40 overflow-y-auto z-[999]">
                            {suggestions.map((friend) => (
                                <li
                                    key={friend.clipId}
                                    onClick={() => handleSuggestionClick(friend)}
                                    className="p-2"
                                >
                                    {friend.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchFriends;

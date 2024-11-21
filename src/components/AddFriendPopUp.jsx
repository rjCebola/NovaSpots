import React, { useState } from 'react';
import { addFriend, getAllUsers, getFriendsWithLocation } from "../users";

const AddFriendPopup = ({ onClose, setFriends, friends }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.trim() === '') {
            setSuggestions([]);
            return;
        }
        const currentFriends = friends.map(friend => friend.clipId);
        const fetchedSuggestions = getAllUsers().filter(user => !currentFriends.includes(user.clipId));
        const filteredSuggestions = fetchedSuggestions.filter(user =>
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.clipId.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (user) => {
        setSelectedUser(user);
        setInputValue(user.name);
        setSuggestions([]);
    };

    const handleConfirmClick = () => {
        if (selectedUser) {
            addFriend(selectedUser.clipId);
            setFriends(getFriendsWithLocation());
            onClose();
            setInputValue('');
            setSelectedUser(null);
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[1000]">
            <div className="bg-white p-4 pt-1 rounded-2xl shadow-lg relative">
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        &times;
                    </button>
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter CLIP Id or name"
                    className="border p-2 rounded-2xl w-full outline-none focus:ring focus:ring-[#0462b9]"
                />
                {suggestions.length > 0 && (
                    <ul className="border mt-2 rounded w-full max-h-40 overflow-y-auto">
                        {suggestions.map((user) => (
                            <li
                                key={user.clipId}
                                onClick={() => handleSuggestionClick(user)}
                                className="p-2 cursor-pointer hover:bg-gray-200"
                            >
                                {user.name}
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex justify-end">
                    <button
                        onClick={handleConfirmClick}
                        className="mt-4 p-3 rounded-2xl bg-[#0462b9] text-white"
                    >
                        Add to friends
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddFriendPopup;
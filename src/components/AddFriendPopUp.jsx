import React, { useState } from 'react';
import { addFriend, getAllUsers, getFriendsWithLocation } from "../users";
import { SliderAnimation } from '../Animations';

const AddFriendPopup = ({ onClose, setFriends, friends }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [closing, setClosing] = useState(false);
    const [dragClosing, setDragClosing] = useState(false);
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const [dragging, setDragging] = useState(false);

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

    const handleKeyDown = (e) => {
        if ((e.key === 'Enter' || e.key === 'Go' || e.keyCode === 13)) {
            handleConfirmInput();
        }
    };

    const handleConfirmInput = () => {
        if (suggestions.length === 1) {
            handleSuggestionClick(suggestions[0]);
        }
    };

    const handleAddFriendClick = () => {
        if (selectedUser) {
            addFriend(selectedUser.clipId);
            setFriends(getFriendsWithLocation());
            onClose();
            setInputValue('');
            setSelectedUser(null);
        }
    };

    const handleTouchStart = (e) => {
        const touchStart = e.touches[0].clientY;
        setStartY(touchStart);
        setDragging(true);
      };

    const handleTouchMove = (e) => {
        if (dragging) {
          const touchMove = e.touches[0].clientY;
          setCurrentY(touchMove);
        }
      };

      const handleTouchEnd = () => {
        setDragging(false);
        if (startY < currentY && currentY - startY > 50) {
          setDragClosing(true);
          setTimeout(() => {
            onClose();
            setDragClosing(false);
          }, 1200 * 10 / (currentY - startY));
        }
        setStartY(0);
        setCurrentY(0);
      };
    
      const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
            setClosing(false);
        }, 300);
      };

    return (
        <SliderAnimation
            showing={!closing}
            className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black group"
            style={{
                transform: dragClosing ? 'translateY(100%)' : dragging ? `translateY(${Math.max(0, currentY - startY)}px)` : 'translateY(0)',
                transition: !dragging ? 'transform 0.3s ease-out' : 'none',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            >
                    <div className="w-1/4 h-0.5 bg-gray-300 mb-4 group-active:bg-gray-600"></div>
                   
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter CLIP Id or name"
                        className="border p-2 rounded-2xl w-full outline-none focus:ring focus:ring-[#0462b9]"
                    />
                    {suggestions.length > 0 && (
                        <ul className=" mt-2 rounded w-full max-h-40 overflow-y-auto">
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

                    <div className="flex justify-end w-full">
                        <button
                            onClick={handleAddFriendClick}
                            className="mt-4 p-3 rounded-2xl bg-[#0462b9] text-white"
                        >
                            Add to friends
                        </button>
                    </div>
            
        </SliderAnimation>
    );
};

export default AddFriendPopup;
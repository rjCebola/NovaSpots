import React, { useState } from 'react';

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
        const fetchedSuggestions = [
            { name: "Alice Brown", clipId: "a.brown", location: "Gym" },
            { name: "Amanda Blue", clipId: "a.blue", location: "Library" },
            { name: "Bob White", clipId: "b.white", location: "Cafeteria" },
            { name: "Bill Black", clipId: "b.black", location: "Gym" },
            { name: "Charlie Black", clipId: "c.black", location: "Library" },
            { name: "Catherine Green", clipId: "c.green", location: "Ed7/1.02" },
            { name: "David Green", clipId: "d.green", location: "Ed7/1.02" },
            { name: "Diana Red", clipId: "d.red", location: "Gym" },
            { name: "Eve Blue", clipId: "e.blue", location: "Cafeteria" },
            { name: "Edward Yellow", clipId: "e.yellow", location: "Library" },
            { name: "Frank Red", clipId: "f.red", location: "Library" },
            { name: "Fiona White", clipId: "f.white", location: "Gym" },
            { name: "Grace Yellow", clipId: "g.yellow", location: "Gym" },
            { name: "George Black", clipId: "g.black", location: "Cafeteria" },
            { name: "Hank Purple", clipId: "h.purple", location: "Ed7/1.03" },
            { name: "Helen Blue", clipId: "h.blue", location: "Library" },
            { name: "Ivy Orange", clipId: "i.orange", location: "Cafeteria" },
            { name: "Ian Green", clipId: "i.green", location: "Gym" },
            { name: "Jack Pink", clipId: "j.pink", location: "Library" },
            { name: "Jill White", clipId: "j.white", location: "Ed7/1.02" }
        ];
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
            setFriends([...friends, selectedUser]);
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
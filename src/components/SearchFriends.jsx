import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

function SearchFriends({ isFriendsSelected }) {
    const [showSearchBar, setShowSearchBar] = useState(false);

    return (
        <>
            {isFriendsSelected && (
                <div className="flex fixed justify-center items-center top-20 right-5 z-[998]">
                    <button className="w-12 h-12 rounded-full bg-white text-2xl shadow-lg">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="text-[#0462b9] h-7 cursor-pointer"
                            onClick={() => setShowSearchBar(prevState => !prevState)}
                        />
                    </button>
                    {showSearchBar && (
                        <input
                            type="text"
                            className="border rounded-2xl px-4 py-2 ml-2 outline-none focus:ring focus:ring-[#0462b9] w-40"
                            placeholder="Search..."
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default SearchFriends;
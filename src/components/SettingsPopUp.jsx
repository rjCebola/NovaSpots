function SettingsPopUp({setShowFriendsPage}) {
    const handleFriendsClick = () => {
      setShowFriendsPage(true);
    };

    return (
      <div className="absolute top-16 right-0 w-32 bg-white border border-gray-200 rounded-bl-lg shadow-lg p-2 z-[999]">
        <button className="block w-full text-lg text-left px-3 py-2">Profile</button>
        <button className="block w-full text-lg text-left px-3 py-2" onClick={handleFriendsClick}>Friends</button>
        <button className="block w-full text-lg text-left px-3 py-2">Settings</button>
        <hr className="border-gray-300" />
        <button className="block w-full text-left px-3 py-2 text-red-500">Log out</button>
      </div>
    );  
  }
  
  export default SettingsPopUp;
  
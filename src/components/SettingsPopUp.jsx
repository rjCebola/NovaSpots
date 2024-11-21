import { useState, useEffect } from "react";


function SettingsPopUp({ setState, setViewProfile }) {

  const [scale,setScale] = useState('scale(0)');
  useEffect(() => {
    setScale('scale(1)');
    return() => {
      setScale('scale(0)')
      setTimeout(() => {
      },300);
    }
  }, []);
  
  return (
    <div className="absolute top-16 right-0 w-32 bg-white border border-gray-200 rounded-bl-lg shadow-lg p-2 z-[999]"
      style={{
        transform : scale,
        transformOrigin : 'top right',
        transition: 'transform 0.1s ease-out' 
      }}
    >
      <button className="block w-full text-lg text-left px-3 py-2">Profile</button>
      <button className="block w-full text-lg text-left px-3 py-2" onClick={() => { setState("friends"); setViewProfile(false) }}>Friends</button>
      <button className="block w-full text-lg text-left px-3 py-2">Settings</button>
      <hr className="border-gray-300" />
      <button className="block w-full text-left px-3 py-2 text-red-500">Log out</button>
    </div>
  );
}

export default SettingsPopUp;

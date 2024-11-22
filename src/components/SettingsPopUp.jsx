import { useState, useEffect } from "react";


function SettingsPopUp({ setState, setViewProfile }) {
  const [shrink, setShrink] = useState('scale(1)')
  const [background, setBackground] = useState('')

  const handleButtonClick = () => {
    handleShrinkStart();
    setTimeout(() => {
      handleShrinkEnd();
    }, 25);
  }
    const handleShrinkStart = () => {
        setShrink('scale(0.95)');
        setBackground('bg-slate-100');
    }

    const handleShrinkEnd = () => {
        setShrink('scale(1)');
        setBackground('');
    }

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
      <button className="block w-full text-lg text-left px-3 py-2 select-none">Profile</button>
      <button className={`block w-full text-lg text-left px-3 py-2 rounded-lg ${background} select-none` }
        style={{transform : shrink, transition:'0.025s'}}
        onTouchStart={handleShrinkStart}
        onTouchEnd={handleShrinkEnd}
        onClick={() => { handleButtonClick(); setTimeout(() => {setState("friends"); setViewProfile(false)}, 50) }} 
        >Friends</button>
      <button className="block w-full text-lg text-left px-3 py-2 select-none">Settings</button>
      <hr className="border-gray-300" />
      <button className="block w-full text-left px-3 py-2 text-red-500 select-none">Log out</button>
    </div>
  );
}

export default SettingsPopUp;

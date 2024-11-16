import MapComponent from './components/MapComponent';
import Header from './components/Header';
import LayersPopUp from './components/LayersPopUp';
import SettingsPopup from './components/SettingsPopUp';
import LayersButton from './components/LayersButton';
import MapInformation from './components/MapInformation';
import React, { useState } from "react";

function App() {

  const [state, setState] = useState("map");
  const [viewProfile, setViewProfile] = useState(false);

  return (
    <>

      <Header setViewProfile={setViewProfile}/>
      <div className='relative'>
        <MapComponent />
        <div className='absolute top-0 z-[999] p-3 bg-white border-2 border-t-0 rounded-br-xl text-lg'>
          <MapInformation />


        </div>
      </div>
      {state === "map" && <LayersButton setState={setState} />}
      {state === "popUp" && <LayersPopUp setState={setState} />}
      {viewProfile && <SettingsPopup viewProfile={viewProfile} setViewProfile={setViewProfile}/>}
    </>
  );
}

export default App;

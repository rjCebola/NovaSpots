import MapComponent from './components/MapComponent';
import Header from './components/Header';
import LayersPopUp from './components/LayersPopUp';
import SettingsPopUp from './components/SettingsPopUp';
import LayersButton from './components/LayersButton';
import MapInformation from './components/MapInformation';
import React, { useState } from "react";
import ClassroomPopUp from './components/ClassroomPopUp';

function App() {

  const [state, setState] = useState("map");
  const [building, setBuilding] = useState([0,0])
  const [viewProfile, setViewProfile] = useState(false);
  const [layersMap, setLayers] = useState(false);

  return (
    <>

      <Header viewProfile={viewProfile} setViewProfile={setViewProfile}/>
      <div className='relative'>
        <MapComponent viewProfile={viewProfile} setViewProfile={setViewProfile}/>
        <div className='absolute top-0 z-[999] p-2 bg-white border-2 border-t-0 border-l-0 rounded-br-xl text-lg'>
          <MapInformation state={state} building={building}/>


        </div>
      </div>
      {state === "map" && <LayersButton setLayers={setLayers} />}
      {layersMap && <LayersPopUp setLayers={setLayers} />}
      {state === "building" && <ClassroomPopUp setState={setState}/>}

      {viewProfile && <SettingsPopUp />}
    </>
  );
}

export default App;

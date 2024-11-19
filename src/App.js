import MapComponent from './components/MapComponent';
import Header from './components/Header';
import LayersPopUp from './components/LayersPopUp';
import SettingsPopUp from './components/SettingsPopUp';
import LayersButton from './components/LayersButton';
import MapInformation from './components/MapInformation';
import React, { useState } from "react";
import ClassroomPopUp from './components/ClassroomPopUp';
import CanteenPopUp from './components/CanteenPopUp';

function App() {

  const [viewProfile, setViewProfile] = useState(false);
  const [mapPopUps, setMapPopUps] = useState("map");
  //const [canteenPop, setCanteenPop] = useState(false);
  const [roomPop, setPop] = useState(0);

  const [state, setState] = useState("map");
  const [building, setBuilding] = useState([0, 0])


  return (
    <>

      <Header viewProfile={viewProfile} setViewProfile={setViewProfile} />
      <div className='relative'>
        <MapComponent
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
          setState={setState}
          building={building}
          setBuilding={setBuilding}
          state={state}
          setMapPopUps={setMapPopUps} />
        <div className='absolute top-0 z-[999] p-2 bg-white border-2 border-t-0 border-l-0 rounded-br-xl text-lg'>
          <MapInformation state={state} building={building} setState={setState} />


        </div>
      </div>
      {state === "map" && mapPopUps === "canteen" && <CanteenPopUp setMapPopUps={setMapPopUps} />}
      {state === "map" && <LayersButton setMapPopUps={setMapPopUps} />}
      {mapPopUps === "layers" && <LayersPopUp setMapPopUps={setMapPopUps} />}
      {state === "building" && roomPop !== 0 && <ClassroomPopUp setState={setState} />}

      {viewProfile && <SettingsPopUp />}
    </>
  );
}

export default App;

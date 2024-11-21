import MapComponent from './components/MapComponent';
import Header from './components/Header';
import LayersPopUp from './components/LayersPopUp';
import SettingsPopUp from './components/SettingsPopUp';
import LayersButton from './components/LayersButton';
import MapInformation from './components/MapInformation';
import React, { useState } from "react";
import ClassroomPopUp from './components/ClassroomPopUp';
import CanteenPopUp from './components/CanteenPopUp';
import SearchFriends from './components/SearchFriends';
import FriendsPage from './components/FriendsPage';

function App() {

  const [mapPopUps, setMapPopUps] = useState("map");
  const [state, setState] = useState("map");
  const [viewProfile, setViewProfile] = useState(false);
  const [isFriendsSelected, setIsFriendsSelected] = useState(false);
  const [isFoodLayerSelected, setIsFoodLayerSelected] = useState(false);

  const [roomPop, setRoomPop] = useState(0);
  const [building, setBuilding] = useState([0, 0])


  return (
    <>
      {isFriendsSelected && state === "map" && <SearchFriends />}
      {state !== "friends" && <div className='relative'>
        <MapComponent
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
          state={state}
          setState={setState}
          building={building}
          setBuilding={setBuilding}
          setRoomPop={setRoomPop}
          setMapPopUps={setMapPopUps}
          isFoodLayerSelected={isFoodLayerSelected}
        />
      </div>}
      <div className='flex flex-col fixed top-0 w-full z-[999]'>
        <Header viewProfile={viewProfile} setViewProfile={setViewProfile} setState={setState} setIsFriendsSelected={setIsFriendsSelected} setBuilding={setBuilding} setRoomPop={setRoomPop} setMapPopUps={setMapPopUps} setIsFoodLayerSelected={setIsFoodLayerSelected}/>
        <div className='self-start'>
          <div className='inline-block p-2 bg-white border-2 border-t-0 border-l-0 rounded-br-xl text-lg'>
            <MapInformation state={state} building={building} setState={setState} setRoomPop={setRoomPop} />
          </div>
        </div>
      </div>
  
      
      {state === "map" && mapPopUps === "canteen" && <CanteenPopUp setMapPopUps={setMapPopUps} />}
      {state === "map" && mapPopUps === "map" && <LayersButton setMapPopUps={setMapPopUps} />}
      {mapPopUps === "layers" && <LayersPopUp setMapPopUps={setMapPopUps} setIsFriendsSelected={setIsFriendsSelected} setIsFoodLayerSelected={setIsFoodLayerSelected}/>}
      {state === "building" && roomPop !== 0 && <ClassroomPopUp building={building} roomPop={roomPop} setRoomPop={setRoomPop} />}

      {viewProfile && <SettingsPopUp setState={setState} setViewProfile={setViewProfile} />}
      {state === "friends" && <FriendsPage />}
    </>
  );
}

export default App;

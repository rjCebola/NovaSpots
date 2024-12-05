import MapComponent from './components/MapComponent';
import Header from './components/Header';
import LayersPopUp from './components/LayersPopUp';
import SettingsPopUp from './components/SettingsPopUp';
import LayersButton from './components/LayersButton';
import SelectedLayerButton from './components/SelectedLayerButton';
import MapInformation from './components/MapInformation';
import React, { useState } from "react";
import ClassroomPopUp from './components/ClassroomPopUp';
import CanteenPopUp from './components/CanteenPopUp';
import SearchFriends from './components/SearchFriends';
import FriendsPage from './components/FriendsPage';
import ChangeFloorsButton from './components/ChangeFloorsButtons';
import TransportsPopUp from './components/TransportPopUp';

function App() {

  const [mapPopUps, setMapPopUps] = useState("map");
  const [state, setState] = useState("map");
  const [viewProfile, setViewProfile] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [layerSelected, setLayerSelected] = useState("");

  const [roomPop, setRoomPop] = useState(0);

  const [studying, setStudying] = useState([0, 0, 0]);

  const [currFoodCourt, setFoodCourt] = useState(null);

  const [building, setBuilding] = useState([0, 0])

  return (
    <>
      {layerSelected === "friends" && state === "map" && <SearchFriends selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend} />}
      {state !== "friends" && <div className='relative'>
        <MapComponent
          roomPop={roomPop}
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
          state={state}
          setState={setState}
          building={building}
          setBuilding={setBuilding}
          setRoomPop={setRoomPop}
          mapPopUps={mapPopUps}
          setMapPopUps={setMapPopUps}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          layerSelected={layerSelected}
          setSelectedTransport={setSelectedTransport}
          currFoodCourt={currFoodCourt}
          setFoodCourt={setFoodCourt}
        />
      </div>}
      <div className='flex flex-col absolute top-0 w-full z-[500]'>
        <Header viewProfile={viewProfile} setViewProfile={setViewProfile} setState={setState} setLayerSelected={setLayerSelected} setBuilding={setBuilding} setRoomPop={setRoomPop} setMapPopUps={setMapPopUps}/>
        {state !== "friends" && 
          <div className='self-start'>
            <div className='p-2 bg-white rounded-br-xl text-lg z-[999] shadow-md relative mt-[-1px]'>
              <MapInformation state={state} building={building} setState={setState} setRoomPop={setRoomPop} setViewProfile={setViewProfile} setMapPopUps={setMapPopUps}/>
            </div>
          </div>
        }
      </div>
  
      
      {state === "map" && mapPopUps === "canteen" && <CanteenPopUp setMapPopUps={setMapPopUps} currFoodCourt={currFoodCourt} />}
      {state === "map" && mapPopUps === "map" && <LayersButton setMapPopUps={setMapPopUps} setViewProfile={setViewProfile}/>}
      {state === "map" && mapPopUps === "map" && layerSelected !== "" && <SelectedLayerButton layerSelected={layerSelected} setLayerSelected={setLayerSelected} />}
      {state === "map" && mapPopUps === "layers" && <LayersPopUp setMapPopUps={setMapPopUps} setLayerSelected={setLayerSelected} layerSelected={layerSelected} setSelectedFriend={setSelectedFriend}/>}
      {state === "building" && roomPop !== 0 && <ClassroomPopUp building={building} roomPop={roomPop} setRoomPop={setRoomPop} studying={studying} setStudying={setStudying}/>}

      {state === "building" && roomPop === 0 && <ChangeFloorsButton building={building} setBuilding={setBuilding} />}


      {viewProfile && <SettingsPopUp setState={setState} setViewProfile={setViewProfile} />}
      {state === "friends" && <FriendsPage setState={setState} setSelectedFriend={setSelectedFriend} setLayerSelected={setLayerSelected}/>}
      {state === "map" && mapPopUps === "transport" && <TransportsPopUp setMapPopUps={setMapPopUps} selectedTransport={selectedTransport}/>}
    </>
  );
}

export default App;

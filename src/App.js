import MapComponent from './components/MapComponent';
import Header from './components/Header';
import LayersPopUp from './components/FoodTransportFriendsPopUp';
import Popup from './components/FoodTransportFriendsPopUp';
import SettingsPopup from './components/SettingsPopUp';
import LayersButton from './components/LayersButton';
import MapInformation from './components/MapInformation';
import React, { useState } from "react";

function App() {

  const [state, setState] = useState("map");

  return (
    <>

      <Header />
      <div className="flex flex-col items-center mt-[-5]">
        <MapComponent />
      </div>

      {state === "map" && 
        <LayersButton setState={setState}/>
      }

      {state === "popUp" &&
        <div className="fixed bottom-0 w-full z-[999]" >
          <LayersPopUp setState={setState} />
        </div>}

      <div>
        <SettingsPopup />
      </div>
    </>
  );
}

export default App;

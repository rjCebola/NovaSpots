import MapComponent from './components/MapComponent';
import Header from './components/Header';
import Popup from './components/FoodTransportFriendsPopUp';

function App() {
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center mt-[-5]">
        <MapComponent />
      </div>
      <div className="fixed bottom-0 w-full" style={{ zIndex: 999 }}>
        <Popup />
      </div>
    </>
  );
}

export default App;

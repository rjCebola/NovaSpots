import MapComponent from './components/MapComponent';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center mt-[-5]">
        <MapComponent />
      </div>
    </>
  );
}

export default App;

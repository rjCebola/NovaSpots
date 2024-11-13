import MapComponent from './components/MapComponent';

function App() {
  return (
    <>
      <header className="flex items-center p-2 bg-white">
        <img src="/NovaSpots_logo.jpg" alt="NovaSpots Logo" className="h-12 mr-2" />
        <h1 className="text-2xl font-bold font-poppins" style={{ color: '#0463ba' }}>NovaSpots</h1>
      </header>
      <div className="flex flex-col items-center mt-[-5]">
        <h1 className="text-xl font-poppins mb-2">Campus Map</h1>
        <MapComponent />
      </div>
    </>
  );
}

export default App;

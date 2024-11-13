import MapComponent from './components/MapComponent';
import './App.css';

function App() {
  return (
    <>
      <header className='app-header'>
        <img src='/NovaSpots_logo.jpg' alt='NovaSpots Logo' className='logo' />
        <h1 className='app-name'>NovaSpots</h1>
      </header>
      <div className='map-container'>
        <h1 className='map-name'>Campus Map</h1>
        <MapComponent />
      </div>
    </>
  );
}

export default App;

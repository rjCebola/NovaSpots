import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; 

function Header({setViewProfile}) {
    return (
        <div className="flex items-center justify-between p-2 bg-white border-b-2">
            <div className="flex items-center">
                <img src="/NovaSpots_logo.jpg" alt="NovaSpots Logo" className="h-12 mr-2" />
                <h1 className="text-2xl font-bold font-poppins" style={{ color: '#0463ba' }}>NovaSpots</h1>
            </div>
            <FontAwesomeIcon icon={faUserCircle} size="lg" className="text-[#0462b9] h-10 pr-2" onClick={() => setViewProfile(true)}/>
           
        </div>)
}

export default Header;
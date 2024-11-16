import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';


function LayersButton({ setLayers }) {
    return (
        <button 
        className="flex fixed justify-center items-center bottom-5 right-5 w-12 h-12 rounded-full bg-white text-2xl shadow-lg z-[999]" 
        onClick={() => setLayers("mapTransportPopUp")}
        >
            <FontAwesomeIcon icon={faLayerGroup} color="#0463ba" />
        </button>
    );
}

export default LayersButton;
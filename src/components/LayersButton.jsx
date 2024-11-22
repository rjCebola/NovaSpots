import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function LayersButton({ setMapPopUps }) {
    const [scale, setScale] = useState('scale(1)')

    const handleShrinkStart = () => {
        setScale('scale(0.9)');
    }

    const handleShrinkEnd = () => {
        setScale('scale(1)')
    }
    return (
        <button 
        className="flex fixed justify-center items-center bottom-5 right-5 w-12 h-12 rounded-full bg-white text-2xl shadow-lg z-[999]" 
        style={{transform: scale, transition: '0.1s'}}
        onClick={() => setMapPopUps("layers")}
        onTouchStart={handleShrinkStart}
        onTouchEnd={handleShrinkEnd}
        >
            <FontAwesomeIcon icon={faLayerGroup} color="#0463ba" />
        </button>
    );
}

export default LayersButton;
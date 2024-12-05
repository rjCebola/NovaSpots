import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrain, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PreventPullToRefresh from './PreventPullToRefresh';


function SelectedLayerButton({ layerSelected, setLayerSelected }) {
    const [scale, setScale] = useState('scale(1)')

    const handleShrinkStart = () => {
        setScale('scale(0.9)');
    }

    const handleShrinkEnd = () => {
        setScale('scale(1)')
    }

    const getIcon = () => {
        switch (layerSelected) {
            case "food":
                return faUtensils;
            case "transport":
                return faTrain;
            case "friends":
                return faUserGroup;
            default:
                return null;
        }
    };
    
    return (
        <PreventPullToRefresh>
        <button 
        className="flex fixed justify-center items-center border border-red-200 bottom-4 left-4 p-3 rounded-2xl bg-white text-2xl shadow-lg z-[999]" 
        style={{transform: scale, transition: '0.1s'}}
        onClick={() => setLayerSelected("")}
        onTouchStart={handleShrinkStart}
        onTouchEnd={handleShrinkEnd}
        >
            <FontAwesomeIcon icon={getIcon()} className="text-red-400" />
            <span className="ml-2 text-sm text-red-400">Remove</span>
        </button>
        </PreventPullToRefresh>
    );
}

export default SelectedLayerButton;
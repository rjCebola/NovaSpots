import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

function LayersButton() {
    return (
        <button style={buttonStyle}>
            <FontAwesomeIcon icon={faLayerGroup} color="#0463ba" />
        </button>
    );
}

const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: '#0463ba',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Added shadow
};

export default LayersButton;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrain, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import {SliderAnimation} from '../Animations';

const buttonStyle = "flex flex-col items-center justify-center w-20 h-20 p-4 rounded-3xl shadow-sm shadow-gray-400 text-[#0463ba]"


const LayersPopUp = ({setState}) => {
  return (
    <SliderAnimation><div className="bottom-0 w-full bg-white p-4 rounded-t-3xl flex h-1/6 justify-around items-center shadow-2xl shadow-black">
      <button onClick={() => setState("map")} className={buttonStyle} >
        <FontAwesomeIcon icon={faUtensils} size="2x"/>
        <span className="mt-1 text-sm">Food</span>
      </button>
      <button onClick={() => setState("map")} className={buttonStyle} >
        <FontAwesomeIcon icon={faTrain} size="2x"/>
        <span className="mt-1 text-sm">Transport</span>
      </button>
      <button onClick={() => setState("map")} className={buttonStyle} >
        <FontAwesomeIcon icon={faUserGroup} size="2x"/>
        <span className="mt-1 text-sm">Friends</span>
      </button>
    </div></SliderAnimation>
  );
};

export default LayersPopUp;
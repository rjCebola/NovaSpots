import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrain, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import {SliderAnimation} from '../Animations';
import React, {useState} from 'react';

const buttonStyle = "flex flex-col items-center justify-center w-20 h-20 p-4 rounded-3xl shadow-sm shadow-gray-400 text-[#0463ba]"


const LayersPopUp = ({setState}) => {

  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setState("map"); 
      setClosing(false);
    }, 300);
  };


  return (
    <SliderAnimation showing={!closing} className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black group">
      <div className="w-1/4 h-1 bg-gray-300 mb-4 group-active:bg-gray-600"></div>
      <div className="flex justify-around w-full">
        <button onClick={() => handleClose()} className={buttonStyle} >
          <FontAwesomeIcon icon={faUtensils} size="2x"/>
          <span className="mt-1 text-sm">Food</span>
        </button>
        <button onClick={() => handleClose()} className={buttonStyle} >
          <FontAwesomeIcon icon={faTrain} size="2x"/>
          <span className="mt-1 text-sm">Transport</span>
        </button>
        <button onClick={() => handleClose()} className={buttonStyle} >
          <FontAwesomeIcon icon={faUserGroup} size="2x"/>
          <span className="mt-1 text-sm">Friends</span>
        </button>
      </div>
    </SliderAnimation>
  );
};

export default LayersPopUp;
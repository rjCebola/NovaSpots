import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { SliderAnimation } from '../Animations';
import React, { useState } from 'react';
import ClassroomSchedule from './ClassroomSchedule';

const LayersPopUp = ({ setState }) => {
  const [closing, setClosing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientY;
    setStartY(touchStart);
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const touchMove = e.touches[0].clientY;
      setCurrentY(touchMove);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    if (startY < currentY && currentY - startY > 100) { // Adjust this threshold as needed
      handleClose();
    }
    setStartY(0);
    setCurrentY(0);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setState("map");
      setClosing(false);
    }, 300);
  };

  return (
    <><SliderAnimation
      showing={!closing}
      className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black group"
      style={{
        transform: dragging ? `translateY(${Math.max(0, currentY - startY)}px)` : 'translateY(0)',
        transition: !dragging ? 'transform 0.3s ease-out' : 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-1/4 h-0.5 bg-gray-300 group-active:bg-gray-600 mb-4"></div>
      <div className="flex flex-col w-full p-3 ">

        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-2xl text-[#0462b9] font-bold">Ed.7 1.01</h2>
          <button onClick={handleClose} className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d6ebff] text-[#0462b9] shadow-sm shadow-gray-400">
            <FontAwesomeIcon icon={faCalendar} size="lg" />
          </button>
        </div>

        <p className="text-gray-600 mb-8">Available until 12:00</p>

        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faUserGroup} size="xl" className="mr-4 text-gray-300" />
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div className="bg-[#6ed49c] h-5 rounded-full" style={{ width: '20%' }}></div>
          </div>
        </div>

        <div className="flex items-center mt-9 justify-center">
          <button onClick={handleClose} className="w-3/4 h-14 p-1 rounded-3xl bg-[#0462b9] text-white shadow-sm shadow-gray-400">
            <FontAwesomeIcon icon={faBook} size="xl" />
            <span className="ml-3 text-sm">I'll be studying here</span>
          </button>
        </div>
      </div>

      <ClassroomSchedule />
    </SliderAnimation>
    
    </>
  );
};

export default LayersPopUp;

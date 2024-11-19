import { SliderAnimation } from '../Animations';
import React, { useState } from 'react';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CanteenPopUp({ setMapPopUps }) {
  const [closing, setClosing] = useState(false);
  const [dragClosing, setDragClosing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date()); // Current date state

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
    if (startY < currentY && currentY - startY > 50) {
      setDragClosing(true);
      setTimeout(() => {
        setMapPopUps("map");
        setDragClosing(false);
      }, 1200 * 10 / (currentY - startY));
    }
    setStartY(0);
    setCurrentY(0);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMapPopUps("map");
      setClosing(false);
    }, 300);
  };

  // Function to navigate to the next day
  const nextDay = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
  };

  // Function to navigate to the previous day
  const prevDay = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
  };

  // Function to check if the current date is today
  const isToday = () => {
    const today = new Date();
    return (
      currentDate.getDate() === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  // Format the current date
  const formattedDate = isToday()
    ? `Today, ${currentDate.getDate()} ${currentDate.toLocaleDateString('en-GB', { month: 'long' })} ${currentDate.getFullYear()}`
    : `${currentDate.toLocaleDateString('en-GB', { weekday: 'long' })}, ${currentDate.getDate()} ${currentDate.toLocaleDateString('en-GB', { month: 'long' })} ${currentDate.getFullYear()}`;

  return (
    <SliderAnimation
      showing={!closing}
      className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black group"
      style={{
        transform: dragClosing ? 'translateY(100%)' : dragging ? `translateY(${Math.max(0, currentY - startY)}px)` : 'translateY(0)',
        transition: !dragging ? 'transform 0.3s ease-out' : 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-1/4 h-0.5 bg-gray-300 mb-4 group-active:bg-gray-600"></div>

      <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-4">
        <button
          onClick={prevDay}
          className="text-gray-400 p-2"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>

        <div className="text-center font-medium text-lg flex-1">
          {formattedDate}
        </div>

        <button
          onClick={nextDay}
          className="text-gray-400 p-2"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>

      <div className="text-center font-medium text-md m-8 text-gray-500">
        Lunch
      </div>

      <div className="flex flex-col space-y-6 w-full">
        <div className="flex items-center w-full">
          <div className="flex w-1/6 justify-end pr-4">
            <div className="font-medium">Soup</div>
          </div>
          <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
          <div className="flex pl-4">
            <div>Feijão verde</div>
          </div>
        </div>

        <div className="flex items-center w-full">
          <div className="flex w-1/6 justify-end pr-4">
            <div className="font-medium">Meat</div>
          </div>
          <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
          <div className="flex pl-4">
            <div>Frango com arroz</div>
          </div>
        </div>

        <div className="flex items-center w-full">
          <div className="flex w-1/6 justify-end pr-4">
            <div className="font-medium">Fish</div>
          </div>
          <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
          <div className="flex pl-4">
            <div>Massa de peixe</div>
          </div>
        </div>

        <div className="flex items-center w-full">
          <div className="flex w-1/6 justify-end pr-4">
            <div className="font-medium">Veg.</div>
          </div>
          <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
          <div className="flex pl-4">
            <div>Rissóis de tofu</div>
          </div>
        </div>
      </div>
    </SliderAnimation>
  );
};

export default CanteenPopUp;

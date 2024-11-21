import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { SliderAnimation } from '../Animations';
import PreventPullToRefresh from './PreventPullToRefresh';

const today = new Date();
const startLimit = new Date(today);
startLimit.setDate(today.getDate() - 7);

const endLimit = new Date(today);
endLimit.setDate(today.getDate() + 7);

function CanteenPopUp({ setMapPopUps }) {
  const [dragClosing, setDragClosing] = useState(false);
  const [dinnerOpen, setDinnerOpen] = useState(false);
  const [popupOffset, setPopupOffset] = useState('100%');
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lChevVisible, setLChevVisible] = useState(true);
  const [rChevVisible, setRChevVisible] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [menus, setMenus] = useState({});

  const generateRandomMenu = () => {
    const soups = ["Tomato Soup", "Green Bean Soup", "Chicken Broth"];
    const meats = ["Grilled Chicken", "Beef Stew", "Pork Chops"];
    const fishes = ["Fish Pasta", "Grilled Salmon", "Fried Cod"];
    const veggies = ["Tofu Rolls", "Vegetable Stir Fry", "Grilled Veggies"];

    return {
      lunch: {
        Soup: soups[Math.floor(Math.random() * soups.length)],
        Meat: meats[Math.floor(Math.random() * meats.length)],
        Fish: fishes[Math.floor(Math.random() * fishes.length)],
        Veg: veggies[Math.floor(Math.random() * veggies.length)],
      },
      dinner: {
        Soup: soups[Math.floor(Math.random() * soups.length)],
        Meat: meats[Math.floor(Math.random() * meats.length)],
        Fish: fishes[Math.floor(Math.random() * fishes.length)],
        Veg: veggies[Math.floor(Math.random() * veggies.length)],
      },
    };
  };

  useEffect(() => {
    const tempMenus = {};
    for (let i = -7; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      tempMenus[date.toDateString()] = generateRandomMenu();
    }
    setMenus(tempMenus);
    setPopupOffset('47%');
  }, []);

  const nextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    if (newDate <= endLimit) {
      setCurrentDate(newDate);
      setLChevVisible(true);
    }
    if (newDate.getDate() === endLimit.getDate() - 1) {
      setRChevVisible(false);
    }
  };

  const prevDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    if (newDate >= startLimit) {
      setCurrentDate(newDate);
      setRChevVisible(true);
    }
    if (newDate.getDate() === startLimit.getDate() + 1) {
      setLChevVisible(false);
    }
  };

  const formattedDate =
    currentDate.toDateString() === today.toDateString()
      ? `Today, ${today.getDate()} ${today.toLocaleDateString('en-GB', { month: 'long' })} ${today.getFullYear()}`
      : `${currentDate.toLocaleDateString('en-GB', { weekday: 'long' })}, ${currentDate.getDate()} ${currentDate.toLocaleDateString('en-GB', { month: 'long' })} ${currentDate.getFullYear()}`;

  const currentMenu = menus[currentDate.toDateString()];

  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientY;
    setStartY(touchStart);
    setCurrentY(touchStart);
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
    if (startY < currentY && currentY - startY > 50 && !dinnerOpen) {
      handleClose();
    }
    if (startY < currentY && currentY - startY > 250 && dinnerOpen) {
      handleClose();
    }
    if(startY > currentY && startY - currentY > 50 && !dinnerOpen){
      switchDinnerState();
    }
    if (startY < currentY && currentY - startY > 50 && currentY - startY < 250 && dinnerOpen) {
      switchDinnerState();
    }
  };

  const handleClose = () => {
    setDragClosing(true);
    setTimeout(() => {
      setMapPopUps("map");
      setDragClosing(false);
    }, 200);
  };

  const switchDinnerState = () => {
    if(dinnerOpen){
      setDinnerOpen(false);
      setPopupOffset('47%');
    } else {
      setDinnerOpen(true);
      setPopupOffset('0%');
    }
  }

  return (
    <PreventPullToRefresh>
    <div
      className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black group"
      style={{
        transform: dragClosing ? 'translateY(100%)' : dragging ? `translateY(max(calc(${currentY - startY}px + ${popupOffset}),0%))`: `translateY(${popupOffset})`,
        transition: !dragging ? 'transform 0.2s ease-out' : 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-1/4 h-0.5 bg-gray-300 mb-8 group-active:bg-gray-600"></div>

      <div className="absolute top-4 left-0 right-0 flex justify-between items-start px-4 pb-1">
      {lChevVisible ? ( 
          <div className="flex flex-col items-center w-10">
            <button
              onClick={prevDay}
              className="text-gray-400 p-2"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            {currentDate > today && currentDate.toDateString() !== today.toDateString() && (
              <div className="p-3 flex items-center space-x-2">
                <button
                  onClick={() => {setCurrentDate(new Date()); setRChevVisible(true)}}
                  className="text-gray-400 flex items-center"
                >
                  <FontAwesomeIcon icon={faAnglesLeft} size="sm" />
                  <span className="ml-1 text-sm text-gray-400">Today</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-10"></div>
        )}

        <div className="text-center font-medium text-lg flex-1">{formattedDate}</div>

        {rChevVisible ? (
          <div className="flex flex-col items-center w-10">
            <button
              onClick={nextDay}
              className="text-gray-400 p-2"
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
            {currentDate < today && currentDate.toDateString() !== today.toDateString() && (
              <div className="p-3 flex flex-col space-x-2">
                <button
                  onClick={() => {setCurrentDate(new Date()); setLChevVisible(true)}}
                  className="text-gray-400 flex items-center"
                >
                  <span className="mr-1 text-sm text-gray-400">Today</span>
                  <FontAwesomeIcon icon={faAnglesRight} size="sm" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-10"></div>
        )}
      </div>

      <div className="text-center font-medium text-md m-6 text-gray-400">Lunch</div>
      <div className="flex flex-col space-y-6 w-full">
        {currentMenu && currentMenu.lunch && (
          <>
            <div className="flex items-center w-full">
              <div className="flex w-1/6 justify-end pr-4 font-medium">Soup</div>
              <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
              <div className="flex pl-4">{currentMenu.lunch.Soup}</div>
            </div>
            <div className="flex items-center w-full">
              <div className="flex w-1/6 justify-end pr-4 font-medium">Meat</div>
              <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
              <div className="flex pl-4">{currentMenu.lunch.Meat}</div>
            </div>
            <div className="flex items-center w-full">
              <div className="flex w-1/6 justify-end pr-4 font-medium">Fish</div>
              <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
              <div className="flex pl-4">{currentMenu.lunch.Fish}</div>
            </div>
            <div className="flex items-center w-full">
              <div className="flex w-1/6 justify-end pr-4 font-medium">Veg.</div>
              <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
              <div className="flex pl-4">{currentMenu.lunch.Veg}</div>
            </div>
          </>
        )}
      </div>

      <div className="w-[90%] h-0.5 bg-gray-300 mt-8"></div>

      <div className="text-center font-medium text-md m-6 text-gray-400">Dinner</div>
      <div className="flex flex-col space-y-6 w-full">
        {currentMenu && currentMenu.dinner && (
          <>
            <div className="flex items-center w-full">
              <div className="flex w-1/6 justify-end pr-4 font-medium">Soup</div>
              <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
              <div className="flex pl-4">{currentMenu.dinner.Soup}</div>
            </div>
            <div className="flex items-center w-full">
              <div className="flex w-1/6 justify-end pr-4 font-medium">Meat</div>
              <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
              <div className="flex pl-4">{currentMenu.dinner.Meat}</div>
            </div>
            <div className="flex items-center w-full">
              <div className="flex w-1/6 justify-end pr-4 font-medium">Fish</div>
              <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
              <div className="flex pl-4">{currentMenu.dinner.Fish}</div>
            </div>
            <div className="flex items-center w-full">
              <div className="flex w-1/6 justify-end pr-4 font-medium">Veg.</div>
              <div className="border-l-2 border-gray-300 h-8 mx-2"></div>
              <div className="flex pl-4">{currentMenu.dinner.Veg}</div>
            </div>
          </>
        )}
      </div>
    </div>
    </PreventPullToRefresh>
  );
}

export default CanteenPopUp;

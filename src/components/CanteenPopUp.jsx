import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import PreventPullToRefresh from './PreventPullToRefresh';
import { getFoodChoices } from '../Foods';

const today = new Date();
const startLimit = new Date(today);
startLimit.setDate(today.getDate() - 7);

const endLimit = new Date(today);
endLimit.setDate(today.getDate() + 7);

function CanteenPopUp({ setMapPopUps, currFoodCourt }) {
  const [dragClosing, setDragClosing] = useState(false);
  const [dinnerOpen, setDinnerOpen] = useState(false);
  const [popupOffset, setPopupOffset] = useState('100%');
  const [leftArrowScale, setLeftArrowScale] = useState('scale(1)');
  const [rightArrowScale, setRightArrowScale] = useState('scale(1)');
  const [todayArrowScale, setTodayArrowScale] = useState('scale(1)');
  const [arrowGrey, setArrowGrey] = useState(['text-gray-400','text-gray-400','text-gray-400'])//left right today
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lChevVisible, setLChevVisible] = useState(true);
  const [rChevVisible, setRChevVisible] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [menus, setMenus] = useState({});

  useEffect(() => {

    const foods = getFoodChoices(currFoodCourt)

    const tempMenus = {};
    for (let i = -7; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      tempMenus[date.toDateString()] = foods[i + 7];
    }
    setMenus(tempMenus);
    setPopupOffset('47%');
  }, [currFoodCourt]);

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
    const touchStartY = e.touches[0].clientY;
    setStartY(touchStartY);
    setCurrentY(touchStartY);
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const touchMoveY = e.touches[0].clientY;
      setCurrentY(touchMoveY);
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

  const handleButtonClick = (button) => {
    handleShrinkStart(button);
    setTimeout(() => {
      handleShrinkEnd(button);
    }, 75);
  }

  const handleShrinkStart = (button) => {
    switch(button){
      case 'left-arrow': 
        setLeftArrowScale('scale(0.8)');
        setArrowGrey(['text-gray-800','text-gray-400','text-gray-400']);
        break;
      case 'right-arrow': 
        setRightArrowScale('scale(0.8)');
        setArrowGrey(['text-gray-400','text-gray-800','text-gray-400']);
        break;
      default: 
        setTodayArrowScale('scale(0.8)');
        setArrowGrey(['text-gray-400','text-gray-400','text-gray-800']);
    }
  }

  const handleShrinkEnd = (button) => {
      switch(button){
          case 'left-arrow': setLeftArrowScale('scale(1)');break;
          case 'right-arrow': setRightArrowScale('scale(1)');break;
          default: setTodayArrowScale('scale(1)');
      }
      setArrowGrey(['text-gray-400','text-gray-400','text-gray-400']);
  }

  return (
    <PreventPullToRefresh>
    <div
      className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black select-none"
      style={{
        transform: dragClosing ? 'translateY(100%)' : dragging ? `translateY(max(calc(${currentY - startY}px + ${popupOffset}),0%))` : `translateY(${popupOffset})`,
        transition: !dragging ? 'transform 0.2s ease-out' : 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-1/4 h-0.5 bg-gray-300 mb-8 "></div>

      <div className="absolute top-4 left-0 right-0 flex justify-between items-start px-4 pb-1">
      {lChevVisible ? ( 
          <div className="flex flex-col items-center w-10">
            <button
              className={`${arrowGrey[0]} p-2`}
              style={{transform: leftArrowScale, transition: '0.075s' }}
              onClick={() => {handleButtonClick('left-arrow');prevDay()}}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg"/>
            </button>
            {currentDate > today && currentDate.toDateString() !== today.toDateString() && (
              <div className="p-3 flex items-center space-x-2"
                  style={{transform: todayArrowScale, transition: '0.075s' }}
                  onClick={() => handleButtonClick('today-arrow')}>
                <button
                  onClick={() => setTimeout(() => {
                    setCurrentDate(new Date()); setRChevVisible(true)
                  }, 75)}
                  className={`${arrowGrey[2]} p-2 flex items-center`}
                >
                  <FontAwesomeIcon icon={faAnglesLeft} size="sm" />
                  <span className="ml-1 text-sm">Today</span>
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
              className={`${arrowGrey[1]} p-2`}
              style={{transform: rightArrowScale, transition: '0.075s' }}
              onClick={() => {handleButtonClick('right-arrow');nextDay()}}
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg"/>
            </button>
            {currentDate < today && currentDate.toDateString() !== today.toDateString() && (
              <div className="p-3 flex flex-col space-x-2"
                  style={{transform: todayArrowScale, transition: '0.075s' }}
                  onClick={() => handleButtonClick('today-arrow')}>
                <button
                  onClick={() => setTimeout(() => {
                    setCurrentDate(new Date()); setLChevVisible(true)
                  }, 75)}
                  className={`${arrowGrey[2]} p-2 flex items-center`}
                >
                  <span className="mr-1 text-sm">Today</span>
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

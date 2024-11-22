import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrain, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import PreventPullToRefresh from './PreventPullToRefresh';

const buttonStyle = "flex flex-col items-center justify-center w-20 h-20 p-4 rounded-3xl shadow-sm shadow-gray-400 text-[#0463ba]";

const LayersPopUp = ({ setMapPopUps, setLayerSelected, layerSelected, setSelectedFriend }) => {

  const [closing, setClosing] = useState(false);
  const [dragClosing, setDragClosing] = useState(false);
  const [popupOffset, setPopupOffset] = useState('100%');
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setPopupOffset("0%");
  }, []);

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
      }, 300);
    }
    setStartY(0);
    setCurrentY(0);
  };

  const handleClose = () => {
    setSelectedFriend(null);
    setDragClosing(true);
    setTimeout(() => {
      setMapPopUps("map");
      setDragClosing(false);
    }, 300);

  };

  const handleFoodClick = () => {
    if(layerSelected === "food") {
      setLayerSelected("");
    }
    else setLayerSelected("food");
    handleClose();
  };

  const handleFriendsClick = () => {
    if(layerSelected === "friends") {
      setLayerSelected("");
    }
    else setLayerSelected("friends");
    handleClose();
  };

  const handleTransportClick = () => {
    if(layerSelected === "transport") {
      setLayerSelected("");
    }
    else setLayerSelected("transport");
    handleClose();
  };

  return (
    <PreventPullToRefresh>
    <div
      className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black group"
      style={{
        transform: dragClosing ? 'translateY(100%)' : dragging ? `translateY(${Math.max(0, currentY - startY)}px)` : `translateY(${popupOffset})`,
        transition: !dragging ? 'transform 0.3s ease-out' : 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-1/4 h-0.5 bg-gray-300 mb-4 group-active:bg-gray-600"></div>
      <div className="flex justify-around w-full">
        <button onClick={handleFoodClick} className={`${buttonStyle} ${layerSelected === "food" ? 'border-2 border-[#0463ba]' : ''}`}>
          <FontAwesomeIcon icon={faUtensils} size="2x" />
          <span className="mt-1 text-sm">Food</span>
        </button>
        <button onClick={handleTransportClick} className={`${buttonStyle} ${layerSelected === "transport" ? 'border-2 border-[#0463ba]' : ''}`}>
          <FontAwesomeIcon icon={faTrain} size="2x" />
          <span className="mt-1 text-sm">Transport</span>
        </button>
        <button onClick={handleFriendsClick} className={`${buttonStyle} ${layerSelected === "friends" ? 'border-2 border-[#0463ba]' : ''}`}>
          <FontAwesomeIcon icon={faUserGroup} size="2x" />
          <span className="mt-1 text-sm">Friends</span>
        </button>
      </div>
    </div>
    </PreventPullToRefresh>
  );
};

export default LayersPopUp;

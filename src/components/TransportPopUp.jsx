import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrainTram, faBus } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import PreventPullToRefresh from './PreventPullToRefresh';
import { getNext3Bus, getNext3Tram } from '../transports';

const TransportsPopUp = ({ setMapPopUps, selectedTransport}) => {

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

return (
    <PreventPullToRefresh>
        <div
            className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black select-none"
            style={{
                transform: dragClosing ? 'translateY(100%)' : dragging ? `translateY(${Math.max(0, currentY - startY)}px)` : `translateY(${popupOffset})`,
                transition: !dragging ? 'transform 0.3s ease-out' : 'none',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="w-1/4 h-0.5 bg-gray-300 mb-2"></div>
            <div className="overflow-y-auto max-h-96 w-full flex flex-col items-center space-y-4 p-3">
                    {selectedTransport === "Tram" ? (
                        <>
                            <div className="text-2xl font-bold rounded-2xl p-2 bg-[#d6ebff] text-[#0462b9] w-60 text-center">
                                <FontAwesomeIcon icon={faTrainTram} className="h-6 text-[#0462b9] mr-2" />
                                {selectedTransport}
                            </div>
                            <div className="text-lg mb-2 text-gray-600 w-100 text-center">
                                Line 3 · Universidade - Cacilhas  
                            </div>
                            <div className="text-lg mb-1 text-[#0462b9] font-bold w-100 text-center">
                                Next 3 departures:
                            </div>
                            <div className="text-xl text-[#0462b9] w-100 text-center">
                                {getNext3Tram().join(' · ')}
                            </div>
                        </>
                        ) : (
                            <>
                            <div className="text-2xl font-bold rounded-2xl p-2 bg-[#d6ebff] text-[#0462b9] w-60 text-center">
                                <FontAwesomeIcon icon={faBus} className="h-6 text-[#0462b9] mr-2" />
                                {selectedTransport}
                            </div>
                            <div className="text-lg mb-1 text-[#0462b9] font-bold w-100 text-center">
                                Next 3 departures:
                            </div>
                            <div className="text-md text-gray-700 w-100 text-center space-y-2">
                            {getNext3Bus().map((bus) => (
                                <div key={bus.time}>{`(${bus.nbr}) ${bus.destination} - ${bus.time}`}</div>
                            ))}
                            </div>
                        </>
                    )}
                   
                </div>
                
                
                
                
            </div>
    
    </PreventPullToRefresh>
);
};

export default TransportsPopUp;
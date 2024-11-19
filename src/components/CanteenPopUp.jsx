import { SliderAnimation } from '../Animations';
import React, { useState } from 'react';

function CanteenPopUp({ setMapPopUps }) {

  const [closing, setClosing] = useState(false);
  const [dragClosing, setDragClosing] = useState(false);
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

  const handleClose = () => { // pode n ser preciso
    setClosing(true);
    setTimeout(() => {
      setMapPopUps("map");
      setClosing(false);
    }, 300);
  };

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
      <div className="text-center font-medium text-lg mb-4">
        Hoje, 24 de Outubro 2024
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Sopa:</span>
          <span>Feijão verde</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Carne:</span>
          <span>Perna de frango com arroz</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Peixe:</span>
          <span>Massa de peixe</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Veg.:</span>
          <span>Rissóis de tofu</span>
        </div>
      </div>
    </SliderAnimation>
  );
};

export default CanteenPopUp;

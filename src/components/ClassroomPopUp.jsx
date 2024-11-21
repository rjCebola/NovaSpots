import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import ClassroomSchedule from './ClassroomSchedule';
import { checkStringAvailability, dcrOcupancyRoom, getCurrentAvailability, getCurrPeople, incrOcupancyRoom } from '../ScheduleRooms';
import PreventPullToRefresh from './PreventPullToRefresh';

const ClassroomPopUp = ({ roomPop, setRoomPop, building }) => {
  const [dragClosing, setDragClosing] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [popupOffset, setPopupOffset] = useState('100%');
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [studying, setStudying] = useState([0, 0, 0]);

  useEffect(() => {
    setPopupOffset('58%');
  }, []);

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
    if (startY < currentY && currentY - startY > 50 && !scheduleOpen) {
      handleClose();
    }
    if (startY < currentY && currentY - startY > 200 && scheduleOpen) {
      handleClose();
    }
    if(startY > currentY && startY - currentY > 50 && !scheduleOpen){
      switchScheduleState();
    }
    if (startY < currentY && currentY - startY > 50 && currentY - startY < 200 && scheduleOpen) {
      switchScheduleState();
    }
  };

  const switchScheduleState = () => {
    if(scheduleOpen){
      setScheduleOpen(false);
      setPopupOffset('58%');
    } else {
      setScheduleOpen(true);
      setPopupOffset('0%');
    }
  }

  const handleClose = () => {
    setDragClosing(true);
      setTimeout(() => {
        setRoomPop(0);
        setDragClosing(false);
      }, 200);
  };

  function handleStartStudyButton() {
    incrOcupancyRoom(building, roomPop);
    setStudying([building[0], building[1], roomPop])
  }

  function handleEndStudyButton() {
    dcrOcupancyRoom(building, roomPop);
    setStudying([0, 0, 0])
  }

  const availability = checkStringAvailability(building, roomPop);
  const currAvail = getCurrentAvailability(building, roomPop);
  const people = getCurrPeople(building, roomPop) <= 10 ? getCurrPeople(building, roomPop) : 10;
  const color = currAvail ? "bg-[#f87171]" : (people < 10 ? "bg-[#6ed49c]" : "bg-[#f87171]")


  return (
    <>
    <PreventPullToRefresh>
      <div
        className="fixed bottom-0 w-full z-[999] bg-white p-4 pt-2 rounded-t-3xl flex flex-col justify-between items-center shadow-2xl shadow-black group"
        style={{
          transform: dragClosing ? 'translateY(100%)' : dragging ? `translateY(max(calc(${currentY - startY}px + ${popupOffset}),0%))`: `translateY(${popupOffset})` ,
          transition: !dragging ? 'transform 0.2s ease-out' : 'none',
        }}
        
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-1/4 h-0.5 bg-gray-300 group-active:bg-gray-600"></div>
        <div className="flex flex-col w-full p-3 pt-0 ">

          <div className="flex flex-row items-center justify-between w-full">
            <h2 className="text-2xl text-[#0462b9] font-bold">{"Ed." + building[0] + " " + building[1] + "." + roomPop}</h2>
            <button onClick={switchScheduleState} className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d6ebff] text-[#0462b9] shadow-sm shadow-gray-400">
              <FontAwesomeIcon icon={faCalendar} size="lg" />
            </button>
          </div>

          <p className="text-gray-600 pb-4">{availability}</p>

          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faUserGroup} size="xl" className="mr-4 text-gray-300" />
            <div className="w-full bg-gray-200 rounded-full h-5">
              <div className={"bg-[#6ed49c] h-5 rounded-full " + color} style={{ width: (currAvail ? "100%" : people + '0%') }}></div>
            </div>
          </div>

          <div className="flex items-center mt-4 justify-center">

            {currAvail
              ? <button disabled={true} className="w-3/4 h-14 p-1 rounded-3xl bg-[#f87171] text-gray-800 shadow-sm shadow-gray-400">
                  <FontAwesomeIcon icon={faBook} size="xl" />
                  <span className="ml-3 text-sm">Lecture in progress</span>
                </button>

              : ((studying[0] === building[0] && studying[1] === building[1] && studying[2] === roomPop)

                ? <button onClick={handleEndStudyButton} className="w-3/4 h-14 p-1 rounded-3xl text-[#0462b9] shadow-sm shadow-[#0462b9]">
                    <FontAwesomeIcon icon={faBook} size="xl" />
                    <span className="ml-3 text-sm">Going on a break</span>
                  </button>

                : <button onClick={handleStartStudyButton} className="w-3/4 h-14 p-1 rounded-3xl bg-[#0462b9] text-white shadow-sm shadow-gray-400">
                    <FontAwesomeIcon icon={faBook} size="xl" />
                    <span className="ml-3 text-sm">I'll be studying here</span>
                  </button>)}
          </div>
        </div>

        <ClassroomSchedule roomPop={roomPop} building={building} />
      </div>
    </PreventPullToRefresh>
    </>
  );
};

export default ClassroomPopUp;

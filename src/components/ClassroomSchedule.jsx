import React, { useEffect, useRef, useState } from 'react';
import { getSchedule } from '../ScheduleRooms';

const emptyTimeSlot = "px-6 py-3 border-r border-dashed border-gray-400 ";
const filledTimeSlot = "px-6 py-3 bg-gray-300 border-r border-dashed border-gray-400 ";

const daysOfWeek = ["M", "T", "W", "Th", "F"]


function ClassroomSchedule({ building, roomPop }) {

    const tableRef = useRef(null);
    const [currX, setX] = useState(0);

    const date = new Date();
    const dayOfWeek = date.getDay() - 1; // Monday is 0

    let dayOfWeekChar = null;
    if(dayOfWeek >= 0 && dayOfWeek <= 4) {
        dayOfWeekChar = daysOfWeek[dayOfWeek]
    }

    


    function handleTouchStart(e) {
        const currX = e.touches[0].clientX;
        setX(currX);
    }

    function handleTouchMove(e) {
        if (tableRef.current) {
            const touchMoveX = e.touches[0].clientX;
            const diff = currX - touchMoveX;
            tableRef.current.scrollLeft += diff;
            setX(touchMoveX);
        }
    }

    function handleTouchEnd() {
        setX(0);
    };


    useEffect(() => {
        const updateCurrentTimeLine = () => {
            const now = new Date();
            const hours = now.getHours();
            if (hours < 8 || hours >= 19) {
                document.getElementById('current-time-line').style.display = 'none';
                return;
            } else {
                document.getElementById('current-time-line').style.display = 'block';
            }
            const minutes = now.getMinutes();
            const totalMinutes = (hours - 8) * 60 + minutes;
            const table = document.querySelector('table');
            const tableWidth = table.offsetWidth;
            const firstColumnWidth = table.querySelector('th').offsetWidth;
            const timeLine = document.getElementById('current-time-line');
            const position = firstColumnWidth + (totalMinutes / (12 * 60)) * (tableWidth - firstColumnWidth); // Adjust for 12-hour period
            timeLine.style.left = `${position}px`;
            timeLine.style.zIndex = 0;
        };

        updateCurrentTimeLine();
        const interval = setInterval(updateCurrentTimeLine, 30000);

        return () => clearInterval(interval);
    }, []);

    const schedule = getSchedule(building, roomPop);

    return (
        <div className="container px-4">
            <div
                className="relative rounded-lg overflow-x-auto w-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={tableRef}
            >
                <div id="current-time-line" className="absolute h-full z-10" style={{ display: 'block', borderLeft: '2px dashed red', top: '0px' }}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <table className="table-auto border-collapse w-full">
                    <thead className="bg-[#d6ebff] text-gray-600 uppercase text-sm leading-normal">
                        <tr key={"hours"}>
                            <th className="px-3 py-3 sticky left-0 bg-[#d6ebff] z-20">Day</th>
                            <th key={9} className="px-6 py-3">8:00</th>
                            <th key={10} className="px-6 py-3">9:00</th>
                            <th key={11} className="px-6 py-3">10:00</th>
                            <th key={12} className="px-6 py-3">11:00</th>
                            <th key={13} className="px-6 py-3">12:00</th>
                            <th key={14} className="px-6 py-3">13:00</th>
                            <th key={15} className="px-6 py-3">14:00</th>
                            <th key={16} className="px-6 py-3">15:00</th>
                            <th key={17} className="px-6 py-3">16:00</th>
                            <th key={18} className="px-6 py-3">17:00</th>
                            <th key={19} className="px-6 py-3">18:00</th>
                            <th key={20} className="px-6 py-3">19:00</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                        {
                            daysOfWeek.map(element => {
                                return (
                                    <tr key={element} className={"hover:bg-gray-50"}>
                                        <th key={element + "day"} className={"px-3 py-3 font-medium bg-[#d6ebff] sticky left-0 " + ((dayOfWeekChar === element) ? "text-[#0462b9] font-bold bg-[#b3d4f2] border-y-2 border-l-2 border-red-500 border-dashed" : "text-gray-900")} >{element}</th>
                                        <td key={element + "8"} className={(schedule[element][0] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "") }></td>
                                        <td key={element + "9"} className={(schedule[element][1] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "10"} className={(schedule[element][2] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "11"} className={(schedule[element][3] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "12"} className={(schedule[element][4] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "13"} className={(schedule[element][5] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "14"} className={(schedule[element][6] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "15"} className={(schedule[element][7] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "16"} className={(schedule[element][8] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "17"} className={(schedule[element][9] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "18"} className={(schedule[element][10] ? filledTimeSlot : emptyTimeSlot) + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                        <td key={element + "19"} className={(schedule[element][11] ? filledTimeSlot : emptyTimeSlot) + "px-6 py-3 " + ((dayOfWeekChar === element) ? "border-y-2 border-y-red-500" : "")}></td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClassroomSchedule;
import React, { useEffect } from 'react';
import { getSchedule } from '../ScheduleRooms';

const emptyTimeSlot = "px-6 py-3 border-r border-dashed border-gray-300";
const filledTimeSlot = "px-6 py-3 bg-gray-200 border-r border-dashed border-gray-300";

const daysOfWeek = ["M", "T", "W", "Th", "F"]


function ClassroomSchedule({building, roomPop}) {
    useEffect(() => {
        const updateCurrentTimeLine = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const totalMinutes = (hours - 9) * 60 + minutes;
            const table = document.querySelector('table');
            const tableWidth = table.offsetWidth;
            const firstColumnWidth = table.querySelector('th').offsetWidth;
            const timeLine = document.getElementById('current-time-line');
            const position = firstColumnWidth + (totalMinutes / (12 * 60)) * (tableWidth - firstColumnWidth); // Adjust for 12-hour period
            timeLine.style.left = `${position}px`;
        };

        updateCurrentTimeLine();
        const interval = setInterval(updateCurrentTimeLine, 60000);

        return () => clearInterval(interval);
    }, []);

    const schedule = getSchedule(building, roomPop);

    return (
        <div className="container px-4">
            <div className="relative mt-4 rounded-lg overflow-x-auto w-full">
                <div id="current-time-line" className="absolute h-full z-10" style={{ display: 'block', borderLeft: '2px dashed red', top: '0px' }}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <table className="table-auto border-collapse w-full">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <tr key={"hours"}>
                            <th className="px-3 py-3 sticky left-0 bg-gray-100 z-20">Day</th>
                            <th key={9} className="px-6 py-3">9am</th>
                            <th key={10} className="px-6 py-3">10am</th>
                            <th key={11} className="px-6 py-3">11am</th>
                            <th key={12} className="px-6 py-3">12pm</th>
                            <th key={13} className="px-6 py-3">1pm</th>
                            <th key={14} className="px-6 py-3">2pm</th>
                            <th key={15} className="px-6 py-3">3pm</th>
                            <th key={16} className="px-6 py-3">4pm</th>
                            <th key={17} className="px-6 py-3">5pm</th>
                            <th key={18} className="px-6 py-3">6pm</th>
                            <th key={19} className="px-6 py-3">7pm</th>
                            <th key={20} className="px-6 py-3">8pm</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                        {
                            daysOfWeek.map(element => {
                                return (
                                    <tr key={element} className="hover:bg-gray-50">
                                        <th key={element + "day"} className="px-3 py-3 font-medium text-gray-900 bg-gray-100 sticky left-0">{element}</th>
                                        <td key={element + "9"} className={schedule[element][0] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "10"} className={schedule[element][1] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "11"} className={schedule[element][2] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "12"} className={schedule[element][3] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "13"} className={schedule[element][4] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "14"} className={schedule[element][5] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "15"} className={schedule[element][6] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "16"} className={schedule[element][7] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "17"} className={schedule[element][8] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "18"} className={schedule[element][9] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "19"} className={schedule[element][10] ? filledTimeSlot : emptyTimeSlot}></td>
                                        <td key={element + "20"} className={schedule[element][11] ? filledTimeSlot : emptyTimeSlot + "px-6 py-3"}></td>
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
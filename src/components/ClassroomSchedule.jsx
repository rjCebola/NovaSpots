import React, { useEffect } from 'react';

const emptyTimeSlot = "px-6 py-3 border-r border-dashed border-gray-300";
const filledTimeSlot = "px-6 py-3 bg-gray-200 border-r border-dashed border-gray-300";

function ClassroomSchedule() {
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

    return (
        <div className="container mx-auto px-4">
            <div className="relative mt-8 rounded-lg overflow-x-auto w-full">
                <table className="table-auto border-collapse w-full">

                    <div id="current-time-line" className="absolute h-full z-10" style={{ display: 'block', borderLeft: '2px dashed red', top: '0px' }}>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>

                    <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <tr>
                            <th className="px-3 py-3 sticky left-0 bg-gray-100 z-20">Day</th>
                            <th className="px-6 py-3">9am</th>
                            <th className="px-6 py-3">10am</th>
                            <th className="px-6 py-3">11am</th>
                            <th className="px-6 py-3">12pm</th>
                            <th className="px-6 py-3">1pm</th>
                            <th className="px-6 py-3">2pm</th>
                            <th className="px-6 py-3">3pm</th>
                            <th className="px-6 py-3">4pm</th>
                            <th className="px-6 py-3">5pm</th>
                            <th className="px-6 py-3">6pm</th>
                            <th className="px-6 py-3">7pm</th>
                            <th className="px-6 py-3">8pm</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                        <tr className="hover:bg-gray-50">
                            <th className="px-3 py-3 font-medium text-gray-900 bg-gray-100 sticky left-0">M</th>
                            <td className={emptyTimeSlot}></td>
                            <td className={filledTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={filledTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={filledTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className="px-6 py-3"></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <th className="px-3 py-3 font-medium text-gray-900 bg-gray-100 sticky left-0">T</th>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={filledTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={filledTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={emptyTimeSlot}></td>
                            <td className={filledTimeSlot}></td>
                            <td className="px-6 py-3"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClassroomSchedule;

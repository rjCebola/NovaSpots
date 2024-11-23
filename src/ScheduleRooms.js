const daysOfWeek = ["M", "T", "W", "Th", "F"]




export function getSchedule(building, room) {

    //missing all the building choice and soo on
    let floor = "";
    if (building[1] === 1) floor = "firstFloor"
    if (building[1] === 2) floor = "secondFloor"
    if (building[1] === 3) floor = "thirdFloor"


    return ed7Rooms[floor][room];

}




export function getOcupancy(building, hour) {
    let currOcupancy = {}
    const date = new Date();
    const currHour = date.getHours();
    const dayOfWeek = date.getDay() - 1;

    //missing all the building choice and soo on

    if (currHour < 20 && currHour > 8 && dayOfWeek <= 4 && dayOfWeek >= 0) {
        const dayWeekString = daysOfWeek[dayOfWeek]

        let floor = "";
        if (building[1] === 1) floor = "firstFloor"
        if (building[1] === 2) floor = "secondFloor"
        if (building[1] === 3) floor = "thirdFloor"

        Object.keys(ed7Rooms[floor]).forEach(key => {
            currOcupancy[key.toString()] = ed7Rooms[floor][key.toString()][dayWeekString][hour];
        })
    }
    else {
        currOcupancy = false;
    }
    return currOcupancy;
}




export function getCurrPeople(building, room) {
    return ed7Rooms.firstFloor[room].ocupancy;
}




export function incrOcupancyRoom(building, room) {
    ed7Rooms.firstFloor[room].ocupancy++;
}




export function dcrOcupancyRoom(building, room) {
    ed7Rooms.firstFloor[room].ocupancy--;
}




export function checkStringAvailability(building, room) {
    let available = "";

    const roomSchedule = getSchedule(building, room);
    const date = new Date();
    const currHour = date.getHours();
    const dayOfWeek = date.getDay() - 1;
    const dayWeekString = daysOfWeek[dayOfWeek]

    if (currHour >= 20 || dayOfWeek > 4 || dayOfWeek < 0) {
        available = "Available until the next day of Classes"
        return available;
    }
    let blockOfClasses = 0;
    let currOcupancy = false;
    const scheduleDay = roomSchedule[dayWeekString]

    if (currHour > 8) {
        blockOfClasses = currHour - 8;
        currOcupancy = scheduleDay[blockOfClasses];
    }

    let finalBlock = 0;
    for (let i = blockOfClasses + 1; i < 12; i++) {
        let blockOcupancy = scheduleDay[i];

        if (currOcupancy !== blockOcupancy) {
            finalBlock = i; break;
        }
        if (i === scheduleDay.lenght - 1) {
            finalBlock = -1; break; // schedule is all the same
        }
    }

    if (finalBlock === -1) {
        if (currOcupancy) return "Will be available at 20:00"
        else return "Available until the next day of Classes"
    }
    if (currOcupancy) return "Will be available at " + (finalBlock + 8) + ":00"
    else return "Available until " + (finalBlock + 8) + ":00"
}



export function getCurrentAvailability(building, room) {
    const roomSchedule = getSchedule(building, room);
    const date = new Date();
    const currHour = date.getHours();
    const dayOfWeek = date.getDay() - 1;
    const dayWeekString = daysOfWeek[dayOfWeek]


    let currOcupancy = false;

    if (dayOfWeek < 0 && currHour > 8 && currHour < 20) {
        const scheduleDay = roomSchedule[dayWeekString]
        currOcupancy = scheduleDay[currHour - 8];
    }
    return currOcupancy
}

// TRUE IF SALA IS OCUPADA
const ed7Rooms =
{
    firstFloor: {
        1: {
            ocupancy: 4,
            "M": [false, false, false, false, false, false, false, false, false, false, false, false],
            "T": [false, false, false, false, false, false, false, false, false, false, false, false],
            "W": [false, false, false, false, false, false, false, false, false, false, false, false],
            "Th": [false, false, false, false, false, false, false, false, false, false, false, false],
            "F": [false, false, false, false, false, false, false, false, false, false, false, false]
        },
        2: {
            ocupancy: 3,
            "M": [true, false, true, true, true, false, false, false, false, true, false, true],
            "T": [false, true, true, false, true, false, false, false, true, false, true, true],
            "W": [true, false, true, false, false, false, false, false, true, true, true, true],
            "Th": [false, false, false, true, false, true, false, true, false, true, true, true],
            "F": [true, true, true, false, false, true, false, true, false, true, false, false]
        },
        3: {
            ocupancy: 2,
            "M": [true, true, true, false, true, true, false, false, false, true, false, false],
            "T": [true, true, false, false, false, false, false, false, true, true, true, true],
            "W": [false, false, true, false, false, true, true, false, true, false, true, false],
            "Th": [false, true, true, true, false, false, true, false, false, true, true, true],
            "F": [false, true, true, false, true, false, false, false, false, true, false, true]
        },
        4: {
            ocupancy: 10,
            "M": [true, false, true, false, true, false, true, true, true, true, false, false],
            "T": [true, true, true, false, true, false, false, false, true, false, false, true],
            "W": [true, true, false, true, false, false, true, true, false, false, true, false],
            "Th": [false, false, true, true, true, false, false, false, false, true, true, true],
            "F": [false, false, false, true, true, true, false, true, true, false, false, false]
        },
        5: {
            ocupancy: 5,
            "M": [false, true, true, false, true, true, true, true, false, false, true, false],
            "T": [true, true, false, false, true, false, true, false, true, false, true, true],
            "W": [false, true, true, false, false, true, true, false, true, true, false, false],
            "Th": [false, false, true, true, true, true, false, false, true, true, true, true],
            "F": [false, false, true, false, true, false, true, true, true, true, false, true]
        },
        6: {
            ocupancy: 9,
            "M": [true, true, true, false, false, false, true, true, true, false, true, true],
            "T": [true, true, false, true, true, true, false, false, true, false, true, false],
            "W": [false, true, true, false, true, true, false, false, true, true, false, true],
            "Th": [true, false, false, true, true, true, false, false, true, true, true, false],
            "F": [false, true, true, false, true, true, false, false, false, false, false, true]
        },
        7: {
            ocupancy: 4,
            "M": [false, true, true, true, true, true, true, false, false, true, false, false],
            "T": [true, false, true, true, true, true, false, true, false, true, true, false],
            "W": [true, false, true, false, true, true, true, false, false, true, false, true],
            "Th": [false, true, false, false, true, true, false, true, true, false, true, true],
            "F": [true, true, true, true, false, false, true, false, false, true, true, true]
        },
        8: {
            ocupancy: 2,
            "M": [true, true, false, false, false, true, false, true, true, false, true, true],
            "T": [true, false, true, true, false, true, true, true, false, false, true, true],
            "W": [true, false, true, false, true, true, false, true, true, true, true, false],
            "Th": [true, true, false, true, true, false, true, false, true, false, true, true],
            "F": [true, false, true, false, true, true, true, true, false, false, true, false]
        },
        9: {
            ocupancy: 3,
            "M": [false, true, true, false, false, false, true, true, true, true, false, true],
            "T": [false, false, true, true, false, true, true, false, true, true, true, true],
            "W": [false, true, false, true, true, true, false, false, true, false, true, true],
            "Th": [true, true, true, false, false, true, true, true, false, false, true, true],
            "F": [false, true, true, true, true, false, true, true, true, true, true, false]
        },
        10: {
            ocupancy: 1,
            "M": [true, true, true, true, true, true, false, false, false, true, false, false],
            "T": [false, false, true, true, true, true, true, false, true, true, true, false],
            "W": [true, false, true, false, true, false, true, true, true, true, false, true],
            "Th": [true, true, false, true, false, false, true, true, true, true, true, false],
            "F": [true, true, true, false, true, true, true, true, true, false, true, false]
        },
        11: {
            ocupancy: 0,
            "M": [false, true, false, false, true, true, false, true, false, true, false, false],
            "T": [true, false, true, true, false, false, true, false, false, true, false, true],
            "W": [false, true, true, true, true, false, false, true, true, false, true, false],
            "Th": [true, false, false, true, true, true, false, true, true, false, false, true],
            "F": [true, false, false, true, false, true, true, true, true, false, false, false]
        },
        12: {
            ocupancy: 4,
            "M": [true, true, true, true, false, true, true, false, false, true, false, false],
            "T": [false, false, true, false, true, true, false, true, true, true, true, true],
            "W": [true, false, true, true, false, false, true, true, true, true, true, false],
            "Th": [true, true, true, false, false, true, false, true, true, true, true, true],
            "F": [false, true, false, false, true, false, true, true, true, true, false, false]
        },
        13: {
            ocupancy: 2,
            "M": [false, false, true, false, true, true, false, true, false, false, true, false],
            "T": [true, false, true, true, false, false, false, true, true, true, true, false],
            "W": [false, true, false, true, true, false, false, true, false, true, true, true],
            "Th": [true, false, false, true, true, true, true, true, false, true, false, false],
            "F": [false, true, true, false, true, true, true, false, true, true, false, false]
        },
        14: {
            ocupancy: 1,
            "M": [true, true, true, false, true, true, true, false, true, true, true, true],
            "T": [false, true, true, false, false, true, true, false, false, true, true, false],
            "W": [true, false, true, true, false, true, true, false, true, true, true, true],
            "Th": [false, true, false, true, false, true, false, true, true, true, false, true],
            "F": [true, true, false, false, false, false, true, true, false, true, false, true]
        },
        15: {
            ocupancy: 4,
            "M": [true, false, true, true, false, false, true, true, true, false, false, false],
            "T": [true, true, false, false, true, false, true, true, true, false, true, true],
            "W": [true, false, true, true, true, false, true, false, false, true, true, true],
            "Th": [true, true, true, false, false, true, true, false, false, false, true, true],
            "F": [true, true, true, false, true, true, false, false, true, true, true, true]
        },
        16: {
            ocupancy: 10,
            "M": [false, true, false, true, true, true, true, false, true, false, false, true],
            "T": [false, true, false, true, true, false, false, false, true, true, true, true],
            "W": [true, false, true, false, false, true, true, true, true, true, true, false],
            "Th": [true, true, false, true, false, false, true, true, false, false, false, true],
            "F": [false, true, true, true, true, false, false, true, true, false, false, false]
        },
        17: {
            ocupancy: 4,
            "M": [false, true, false, true, true, true, true, false, true, false, true, true],
            "T": [false, true, false, true, true, false, true, false, true, true, true, true],
            "W": [true, false, true, false, true, true, true, true, true, true, true, false],
            "Th": [true, true, false, false, false, false, true, true, false, false, false, true],
            "F": [false, true, true, true, true, false, true, true, true, false, false, false]
        },
        A: {
            ocupancy: 3,
            "M": [false, false, false, false, false, false, false, false, false, false, false, false],
            "T": [false, false, false, false, false, false, false, false, false, false, false, false],
            "W": [false, false, false, false, false, false, false, false, false, false, false, false],
            "Th": [false, false, false, false, false, false, false, false, false, false, false, false],
            "F": [false, false, false, false, false, false, false, false, false, false, false, false]
        },
        B: {
            ocupancy: 2,
            "M": [true, true, false, false, true, false, true, true, false, true, true, true],
            "T": [true, false, false, true, false, true, true, false, true, true, false, true],
            "W": [false, true, false, true, true, true, true, false, true, false, true, true],
            "Th": [false, true, true, true, true, true, true, false, true, false, true, true],
            "F": [true, true, false, false, false, true, false, true, true, true, true, false]
        },
        C: {
            ocupancy: 2,
            "M": [true, true, true, false, false, true, true, true, true, false, false, false],
            "T": [true, false, true, true, false, true, true, true, true, true, true, false],
            "W": [false, true, false, false, true, true, true, true, true, true, false, true],
            "Th": [true, false, true, true, false, true, false, false, true, true, false, true],
            "F": [true, true, true, false, false, false, true, true, true, false, true, false]
        },
        D: {
            ocupancy: 7,
            "M": [true, true, false, false, true, true, false, false, false, true, true, true],
            "T": [true, true, false, true, false, false, false, false, false, true, false, true],
            "W": [true, true, true, false, true, false, true, true, false, false, true, false],
            "Th": [false, true, true, true, true, true, false, false, false, true, true, false],
            "F": [true, false, true, true, false, true, true, true, false, true, false, false]
        }
    },
    secondFloor: {
        1: {
            ocupancy: 4,
            "M": [true, false, true, true, true, true, false, false, false, true, true, false],
            "T": [true, false, true, true, true, false, false, false, false, true, false, true],
            "W": [false, true, true, false, true, true, false, false, true, false, false, true],
            "Th": [true, false, true, false, false, false, true, false, true, true, true, false],
            "F": [false, true, false, true, true, false, false, true, false, true, false, true]
        },
        2: {
            ocupancy: 3,
            "M": [true, false, true, true, true, false, false, false, false, true, false, true],
            "T": [false, true, true, false, true, false, false, false, true, false, true, true],
            "W": [true, false, true, false, false, false, false, false, true, true, true, true],
            "Th": [false, false, false, true, false, true, false, true, false, true, true, true],
            "F": [true, true, true, false, false, true, false, true, false, true, false, false]
        },
        3: {
            ocupancy: 2,
            "M": [true, true, true, false, true, true, false, false, false, true, false, false],
            "T": [true, true, false, false, false, false, false, false, true, true, true, true],
            "W": [false, false, true, false, false, true, true, false, true, false, true, false],
            "Th": [false, true, true, true, false, false, true, false, false, true, true, true],
            "F": [false, true, true, false, true, false, false, false, false, true, false, true]
        },
        4: {
            ocupancy: 10,
            "M": [true, false, true, false, true, false, true, true, true, true, false, false],
            "T": [true, true, true, false, true, false, false, false, true, false, false, true],
            "W": [true, true, false, true, false, false, true, true, false, false, true, false],
            "Th": [false, false, true, true, true, false, false, false, false, true, true, true],
            "F": [false, false, false, true, true, true, false, true, true, false, false, false]
        },
        5: {
            ocupancy: 5,
            "M": [false, true, true, false, true, true, true, true, false, false, true, false],
            "T": [true, true, false, false, true, false, true, false, true, false, true, true],
            "W": [false, true, true, false, false, true, true, false, true, true, false, false],
            "Th": [false, false, true, true, true, true, false, false, true, true, true, true],
            "F": [false, false, true, false, true, false, true, true, true, true, false, true]
        },
        A: {
            ocupancy: 3,
            "M": [true, true, false, true, false, true, false, true, false, true, true, false],
            "T": [false, true, true, false, true, false, true, true, false, false, true, true],
            "W": [true, false, false, false, true, false, true, false, true, true, true, true],
            "Th": [false, true, false, true, false, true, false, true, true, true, true, true],
            "F": [true, false, true, true, false, false, true, false, true, true, true, false]
        },
        B: {
            ocupancy: 2,
            "M": [true, true, false, false, true, false, true, true, false, true, true, true],
            "T": [true, false, false, true, false, true, true, false, true, true, false, true],
            "W": [false, true, false, true, true, true, true, false, true, false, true, true],
            "Th": [false, true, true, true, true, true, true, false, true, false, true, true],
            "F": [true, true, false, false, false, true, false, true, true, true, true, false]
        }
    },
    thirdFloor: {
        1: {
            ocupancy: 4,
            "M": [true, false, true, true, true, true, false, false, false, true, true, false],
            "T": [true, false, true, true, true, false, false, false, false, true, false, true],
            "W": [false, true, true, false, true, true, false, false, true, false, false, true],
            "Th": [true, false, true, false, false, false, true, false, true, true, true, false],
            "F": [false, true, false, true, true, false, false, true, false, true, false, true]
        },
        2: {
            ocupancy: 3,
            "M": [true, false, true, true, true, false, false, false, false, true, false, true],
            "T": [false, true, true, false, true, false, false, false, true, false, true, true],
            "W": [true, false, true, false, false, false, false, false, true, true, true, true],
            "Th": [false, false, false, true, false, true, false, true, false, true, true, true],
            "F": [true, true, true, false, false, true, false, true, false, true, false, false]
        },
        3: {
            ocupancy: 2,
            "M": [true, true, true, false, true, true, false, false, false, true, false, false],
            "T": [true, true, false, false, false, false, false, false, true, true, true, true],
            "W": [false, false, true, false, false, true, true, false, true, false, true, false],
            "Th": [false, true, true, true, false, false, true, false, false, true, true, true],
            "F": [false, true, true, false, true, false, false, false, false, true, false, true]
        },
        4: {
            ocupancy: 10,
            "M": [true, false, true, false, true, false, true, true, true, true, false, false],
            "T": [true, true, true, false, true, false, false, false, true, false, false, true],
            "W": [true, true, false, true, false, false, true, true, false, false, true, false],
            "Th": [false, false, true, true, true, false, false, false, false, true, true, true],
            "F": [false, false, false, true, true, true, false, true, true, false, false, false]
        },
        5: {
            ocupancy: 5,
            "M": [false, true, true, false, true, true, true, true, false, false, true, false],
            "T": [true, true, false, false, true, false, true, false, true, false, true, true],
            "W": [false, true, true, false, false, true, true, false, true, true, false, false],
            "Th": [false, false, true, true, true, true, false, false, true, true, true, true],
            "F": [false, false, true, false, true, false, true, true, true, true, false, true]
        },
    }

}
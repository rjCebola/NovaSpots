const daysOfWeek = ["M", "T", "W", "Th", "F"]


export function getSchedule(building, room) {

    //missing all the building choice and soo on

    return ed7Rooms.firstFloor[room];

}


export function getOcupancy(building, hour) {
    let currOcupancy = {}
    const date = new Date();
    const currHour = date.getHours();
    const dayOfWeek = date.getDay() - 1;

    //missing all the building choice and soo on

    if (currHour < 20 && currHour > 8 && dayOfWeek <= 4 && dayOfWeek >= 0) {
        const dayWeekString = daysOfWeek[dayOfWeek]

        Object.keys(ed7Rooms.firstFloor).forEach(key => {
            currOcupancy[key.toString()] = ed7Rooms.firstFloor[key.toString()][dayWeekString][hour];
        })
    }
    else {
        currOcupancy = false;
    }
    return currOcupancy;
}





// TRUE IF SALA IS OCUPADA

const ed7Rooms =
{
    firstFloor: {
        1: {
            "M": [true, false, true, true, true, true, false, false, false, true, true, false],
            "T": [true, false, true, true, true, false, false, false, false, true, false, true],
            "W": [false, true, true, false, true, true, false, false, true, false, false, true],
            "Th": [true, false, true, false, false, false, true, false, true, true, true, false],
            "F": [false, true, false, true, true, false, false, true, false, true, false, true]
        },
        2: {
            "M": [true, false, true, true, true, false, false, false, false, true, false, true],
            "T": [false, true, true, false, true, false, false, false, true, false, true, true],
            "W": [true, false, true, false, false, false, false, false, true, true, true, true],
            "Th": [false, false, false, true, false, true, false, true, false, true, true, true],
            "F": [true, true, true, false, false, true, false, true, false, true, false, false]
        },
        3: {
            "M": [true, true, true, false, true, true, false, false, false, true, false, false],
            "T": [true, true, false, false, false, false, false, false, true, true, true, true],
            "W": [false, false, true, false, false, true, true, false, true, false, true, false],
            "Th": [false, true, true, true, false, false, true, false, false, true, true, true],
            "F": [false, true, true, false, true, false, false, false, false, true, false, true]
        },
        4: {
            "M": [true, false, true, false, true, false, true, true, true, true, false, false],
            "T": [true, true, true, false, true, false, false, false, true, false, false, true],
            "W": [true, true, false, true, false, false, true, true, false, false, true, false],
            "Th": [false, false, true, true, true, false, false, false, false, true, true, true],
            "F": [false, false, false, true, true, true, false, true, true, false, false, false]
        },
        5: {
            "M": [false, true, true, false, true, true, true, true, false, false, true, false],
            "T": [true, true, false, false, true, false, true, false, true, false, true, true],
            "W": [false, true, true, false, false, true, true, false, true, true, false, false],
            "Th": [false, false, true, true, true, true, false, false, true, true, true, true],
            "F": [false, false, true, false, true, false, true, true, true, true, false, true]
        },
        6: {
            "M": [true, true, true, false, false, false, true, true, true, false, true, true],
            "T": [true, true, false, true, true, true, false, false, true, false, true, false],
            "W": [false, true, true, false, true, true, false, false, true, true, false, true],
            "Th": [true, false, false, true, true, true, false, false, true, true, true, false],
            "F": [false, true, true, false, true, true, false, false, false, false, false, true]
        },
        7: {
            "M": [false, true, true, true, true, true, true, false, false, true, false, false],
            "T": [true, false, true, true, true, true, false, true, false, true, true, false],
            "W": [true, false, true, false, true, true, true, false, false, true, false, true],
            "Th": [false, true, false, false, true, true, false, true, true, false, true, true],
            "F": [true, true, true, true, false, false, true, false, false, true, true, true]
        },
        8: {
            "M": [true, true, false, false, false, true, false, true, true, false, true, true],
            "T": [true, false, true, true, false, true, true, true, false, false, true, true],
            "W": [true, false, true, false, true, true, false, true, true, true, true, false],
            "Th": [true, true, false, true, true, false, true, false, true, false, true, true],
            "F": [true, false, true, false, true, true, true, true, false, false, true, false]
        },
        9: {
            "M": [false, true, true, false, false, false, true, true, true, true, false, true],
            "T": [false, false, true, true, false, true, true, false, true, true, true, true],
            "W": [false, true, false, true, true, true, false, false, true, false, true, true],
            "Th": [true, true, true, false, false, true, true, true, false, false, true, true],
            "F": [false, true, true, true, true, false, true, true, true, true, true, false]
        },
        10: {
            "M": [true, true, true, true, true, true, false, false, false, true, false, false],
            "T": [false, false, true, true, true, true, true, false, true, true, true, false],
            "W": [true, false, true, false, true, false, true, true, true, true, false, true],
            "Th": [true, true, false, true, false, false, true, true, true, true, true, false],
            "F": [true, true, true, false, true, true, true, true, true, false, true, false]
        },
        11: {
            "M": [false, true, false, false, true, true, false, true, false, true, false, false],
            "T": [true, false, true, true, false, false, true, false, false, true, false, true],
            "W": [false, true, true, true, true, false, false, true, true, false, true, false],
            "Th": [true, false, false, true, true, true, false, true, true, false, false, true],
            "F": [true, false, false, true, false, true, true, true, true, false, false, false]
        },
        12: {
            "M": [true, true, true, true, false, true, true, false, false, true, false, false],
            "T": [false, false, true, false, true, true, false, true, true, true, true, true],
            "W": [true, false, true, true, false, false, true, true, true, true, true, false],
            "Th": [true, true, true, false, false, true, false, true, true, true, true, true],
            "F": [false, true, false, false, true, false, true, true, true, true, false, false]
        },
        13: {
            "M": [false, false, true, false, true, true, false, true, false, false, true, false],
            "T": [true, false, true, true, false, false, false, true, true, true, true, false],
            "W": [false, true, false, true, true, false, false, true, false, true, true, true],
            "Th": [true, false, false, true, true, true, true, true, false, true, false, false],
            "F": [false, true, true, false, true, true, true, false, true, true, false, false]
        },
        14: {
            "M": [true, true, true, false, true, true, true, false, true, true, true, true],
            "T": [false, true, true, false, false, true, true, false, false, true, true, false],
            "W": [true, false, true, true, false, true, true, false, true, true, true, true],
            "Th": [false, true, false, true, false, true, false, true, true, true, false, true],
            "F": [true, true, false, false, false, false, true, true, false, true, false, true]
        },
        15: {
            "M": [true, false, true, true, false, false, true, true, true, false, false, false],
            "T": [true, true, false, false, true, false, true, true, true, false, true, true],
            "W": [true, false, true, true, true, false, true, false, false, true, true, true],
            "Th": [true, true, true, false, false, true, true, false, false, false, true, true],
            "F": [true, true, true, false, true, true, false, false, true, true, true, true]
        },
        16: {
            "M": [false, true, false, true, true, true, true, false, true, false, false, true],
            "T": [false, true, false, true, true, false, false, false, true, true, true, true],
            "W": [true, false, true, false, false, true, true, true, true, true, true, false],
            "Th": [true, true, false, true, false, false, true, true, false, false, false, true],
            "F": [false, true, true, true, true, false, false, true, true, false, false, false]
        },
        17: {
            "M": [false, true, false, true, true, true, true, false, true, false, true, true],
            "T": [false, true, false, true, true, false, true, false, true, true, true, true],
            "W": [true, false, true, false, true, true, true, true, true, true, true, false],
            "Th": [true, true, false, false, false, false, true, true, false, false, false, true],
            "F": [false, true, true, true, true, false, true, true, true, false, false, false]
        },
        A: {
            "M": [true, true, false, true, false, true, false, true, false, true, true, false],
            "T": [false, true, true, false, true, false, true, true, false, false, true, true],
            "W": [true, false, false, false, true, false, true, false, true, true, true, true],
            "Th": [false, true, false, true, false, true, false, true, true, true, true, true],
            "F": [true, false, true, true, false, false, true, false, true, true, true, false]
        },
        B: {
            "M": [true, true, false, false, true, false, true, true, false, true, true, true],
            "T": [true, false, false, true, false, true, true, false, true, true, false, true],
            "W": [false, true, false, true, true, true, true, false, true, false, true, true],
            "Th": [false, true, true, true, true, true, true, false, true, false, true, true],
            "F": [true, true, false, false, false, true, false, true, true, true, true, false]
        },
        C: {
            "M": [true, true, true, false, false, true, true, true, true, false, false, false],
            "T": [true, false, true, true, false, true, true, true, true, true, true, false],
            "W": [false, true, false, false, true, true, true, true, true, true, false, true],
            "Th": [true, false, true, true, false, true, false, false, true, true, false, true],
            "F": [true, true, true, false, false, false, true, true, true, false, true, false]
        },
        D: {
            "M": [true, true, false, false, true, true, false, false, false, true, true, true],
            "T": [true, true, false, true, false, false, false, false, false, true, false, true],
            "W": [true, true, true, false, true, false, true, true, false, false, true, false],
            "Th": [false, true, true, true, true, true, false, false, false, true, true, false],
            "F": [true, false, true, true, false, true, true, true, false, true, false, false]
        }
    },
    secondFloor: 0,
    thirdFloor: 0

}
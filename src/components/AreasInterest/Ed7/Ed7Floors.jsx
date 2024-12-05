
import { Polygon } from "react-leaflet";
import { getOcupancy } from "../../../ScheduleRooms";

function Ed7FirstFloor({ building, setRoomPop, viewProfile, setViewProfile }) {

    const currHour = (new Date()).getHours();
    var ocupancy;
    if (currHour < 20 && currHour > 8) {
        ocupancy = getOcupancy(building, currHour - 8);
    }
    else {
        ocupancy = false;
    }

    return <>
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[1] ? "red" : "green") : "green" }}
            positions={[[1450, 600],
            [1450, 685],
            [1350, 685],
            [1350, 600],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(1);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[2] ? "red" : "green") : "green" }}
            positions={[[1450, 775],
            [1450, 685],
            [1350, 685],
            [1350, 775],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(2);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[3] ? "red" : "green") : "green" }}
            positions={[[1450, 815],
            [1450, 860],
            [1350, 860],
            [1350, 815],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(3);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[4] ? "red" : "green") : "green" }}
            positions={[[1450, 900],
            [1450, 860],
            [1350, 860],
            [1350, 900],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(4);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[5] ? "red" : "green") : "green" }}
            positions={[[1450, 900],
            [1450, 945],
            [1350, 945],
            [1350, 900],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(5);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[6] ? "red" : "green") : "green" }}
            positions={[[1450, 990],
            [1450, 945],
            [1350, 945],
            [1350, 990],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(6);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[7] ? "red" : "green") : "green" }}
            positions={[[1450, 990],
            [1450, 1030],
            [1350, 1030],
            [1350, 990],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(7);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[8] ? "red" : "green") : "green" }}
            positions={[[1450, 1075],
            [1450, 1030],
            [1350, 1030],
            [1350, 1075],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(8);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[15] ? "red" : "green") : "green" }}
            positions={[[1325, 600],
            [1325, 685],
            [1225, 685],
            [1225, 600],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(15);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[14] ? "red" : "green") : "green" }}
            positions={[[1325, 775],
            [1325, 685],
            [1225, 685],
            [1225, 775],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(14);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[13] ? "red" : "green") : "green" }}
            positions={[[1325, 815],
            [1325, 860],
            [1225, 860],
            [1225, 815],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(13);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[12] ? "red" : "green") : "green" }}
            positions={[[1325, 900],
            [1325, 860],
            [1225, 860],
            [1225, 900],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(12);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[11] ? "red" : "green") : "green" }}
            positions={[[1325, 900],
            [1325, 945],
            [1225, 945],
            [1225, 900],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(11);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[10] ? "red" : "green") : "green" }}
            positions={[[1325, 990],
            [1325, 945],
            [1225, 945],
            [1225, 990],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(10);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[9] ? "red" : "green") : "green" }}
            positions={[[1325, 990],
            [1325, 1030],
            [1225, 1030],
            [1225, 990],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(9);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy["A"] ? "red" : "green") : "green" }}
            positions={[[915, 480],
            [915, 540],
            [730, 540],
            [730, 480],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop("A");

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy["B"] ? "red" : "green") : "green" }}
            positions={[[690, 480],
            [690, 540],
            [510, 540],
            [510, 480],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop("B");

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy["C"] ? "red" : "green") : "green" }}
            positions={[[910, 840],
            [910, 930],
            [670, 930],
            [670, 840],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop("C");

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy["D"] ? "red" : "green") : "green" }}
            positions={[[840, 745],
            [840, 670],
            [760, 645],
            [680, 670],
            [680, 745],
            [760, 770],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop("D");

                },
            }}
        />


        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[17] ? "red" : "green") : "green" }}
            positions={[[600, 850],
            [600, 925],
            [510, 925],
            [510, 850],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(17);

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[16] ? "red" : "green") : "green" }}
            positions={[[600, 850],
            [600, 780],
            [510, 780],
            [510, 850],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(16);

                },
            }}
        />
    </>
}



function Ed7SecondFloor({ building, setRoomPop, viewProfile, setViewProfile }) {

    const currHour = (new Date()).getHours();
    var ocupancy;
    if (currHour < 20 && currHour > 8) {
        ocupancy = getOcupancy(building, currHour - 8);
    }
    else {
        ocupancy = false;
    }

    return <>
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[1] ? "red" : "green") : "green" }}
            positions={[[515, 640],
            [515, 713],
            [605, 713],
            [605, 640],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(1);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[2] ? "red" : "green") : "green" }}
            positions={[[515, 748],
            [515, 713],
            [605, 713],
            [605, 748],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(2);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[3] ? "red" : "green") : "green" }}
            positions={[[515, 748],
            [515, 785],
            [605, 785],
            [605, 748],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(3);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[4] ? "red" : "green") : "green" }}
            positions={[[515, 856],
            [515, 785],
            [605, 785],
            [605, 856],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(4);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[5] ? "red" : "green") : "green" }}
            positions={[[515, 856],
            [515, 928],
            [605, 928],
            [605, 856],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(5);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy["A"] ? "red" : "green") : "green" }}
            positions={[[745, 482],
            [745, 546],
            [922, 546],
            [922, 482],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop("A");
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy["B"] ? "red" : "green") : "green" }}
            positions={[[515, 482],
            [515, 546],
            [690, 546],
            [690, 482],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop("B");
                },
            }}
        />
    </>
}




function Ed7ThirdFloor({ building, setRoomPop, viewProfile, setViewProfile }) {

    const currHour = (new Date()).getHours();
    var ocupancy;
    if (currHour < 20 && currHour > 8) {
        ocupancy = getOcupancy(building, currHour - 8);
    }
    else {
        ocupancy = false;
    }

    return <>
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[1] ? "red" : "green") : "green" }}
            positions={[[507, 640],
            [507, 713],
            [595, 713],
            [595, 640],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(1);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[2] ? "red" : "green") : "green" }}
            positions={[[507, 749],
            [507, 713],
            [595, 713],
            [595, 749],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(2);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[3] ? "red" : "green") : "green" }}
            positions={[[507, 749],
            [507, 785],
            [595, 785],
            [595, 749],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(3);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[4] ? "red" : "green") : "green" }}
            positions={[[507, 856],
            [507, 785],
            [595, 785],
            [595, 856],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(4);
                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ fillOpacity: 0.3, stroke: false, color: ocupancy ? (ocupancy[5] ? "red" : "green") : "green" }}
            positions={[[507, 856],
            [507, 928],
            [595, 928],
            [595, 856],]}
            eventHandlers={{
                click: () => {
                    if (viewProfile) setViewProfile(false)
                    setRoomPop(5);
                },
            }}
        />
    </>
}





export { Ed7FirstFloor };
export { Ed7SecondFloor };
export { Ed7ThirdFloor };
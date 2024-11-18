import { MapContainer, TileLayer, Polygon, Circle } from "react-leaflet";

function Ed7FirstFloor({ state, setState, building, setBuilding }) {
    return <>
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "red" }}
            positions={[[1450, 600],
            [1450, 685],
            [1350, 685],
            [1350, 600],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.01")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "blue" }}
            positions={[[1450, 775],
            [1450, 685],
            [1350, 685],
            [1350, 775],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.02")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "green" }}
            positions={[[1450, 815],
            [1450, 860],
            [1350, 860],
            [1350, 815],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.03")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "red" }}
            positions={[[1450, 900],
            [1450, 860],
            [1350, 860],
            [1350, 900],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.04")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "blue" }}
            positions={[[1450, 900],
            [1450, 945],
            [1350, 945],
            [1350, 900],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.05")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "green" }}
            positions={[[1450, 990],
            [1450, 945],
            [1350, 945],
            [1350, 990],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.06")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "red" }}
            positions={[[1450, 990],
            [1450, 1030],
            [1350, 1030],
            [1350, 990],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.07")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "blue" }}
            positions={[[1450, 1075],
            [1450, 1030],
            [1350, 1030],
            [1350, 1075],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.08")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "red" }}
            positions={[[1325, 600],
            [1325, 685],
            [1225, 685],
            [1225, 600],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.15")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "blue" }}
            positions={[[1325, 775],
            [1325, 685],
            [1225, 685],
            [1225, 775],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.14")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "green" }}
            positions={[[1325, 815],
            [1325, 860],
            [1225, 860],
            [1225, 815],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.13")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "red" }}
            positions={[[1325, 900],
            [1325, 860],
            [1225, 860],
            [1225, 900],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.12")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "blue" }}
            positions={[[1325, 900],
            [1325, 945],
            [1225, 945],
            [1225, 900],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.11")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "green" }}
            positions={[[1325, 990],
            [1325, 945],
            [1225, 945],
            [1225, 990],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.10")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "red" }}
            positions={[[1325, 990],
            [1325, 1030],
            [1225, 1030],
            [1225, 990],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.09")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "red" }}
            positions={[[915, 480],
            [915, 540],
            [730, 540],
            [730, 480],]}
            eventHandlers={{
                click: () => {
                    console.log("Auditório 1A")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "blue" }}
            positions={[[690, 480],
            [690, 540],
            [510, 540],
            [510, 480],]}
            eventHandlers={{
                click: () => {
                    console.log("Auditório 1B")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "green" }}
            positions={[[840, 745],
            [840, 670],
            [760, 645],
            [680, 670],
            [680, 745],
            [760, 770],]}
            eventHandlers={{
                click: () => {
                    console.log("Auditório 1D")

                },
            }}
        />

        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "blue" }}
            positions={[[910, 840],
            [910, 930],
            [670, 930],
            [670, 840],]}
            eventHandlers={{
                click: () => {
                    console.log("Auditório 1C")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "red" }}
            positions={[[600, 850],
            [600, 925],
            [510, 925],
            [510, 850],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.17")

                },
            }}
        />
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "green" }}
            positions={[[600, 850],
            [600, 780],
            [510, 780],
            [510, 850],]}
            eventHandlers={{
                click: () => {
                    console.log("sala 1.16")

                },
            }}
        />
    </>
}



function Ed7SecondFloor({ state, setState, building, setBuilding }) {
    return <>

    </>
}




function Ed7ThirdFloor({ state, setState, building, setBuilding }) {
    return <>

    </>
}





export { Ed7FirstFloor };
export { Ed7SecondFloor };
export { Ed7ThirdFloor };
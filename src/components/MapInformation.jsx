
function handleCampusClick(setState,setRoomPop) {
    setState("map");
    setRoomPop(0);
    return null
}





function MapInformation({ state, building, setState, setRoomPop }) {

    const info = ["Campus", "", ""]

    if (state === "building") {
        info[1] = building[0] //depende do edificio atual
        info[2] = building[1] // depende do andar atual
    }


    return (
        <div className="flex gap-1 text-base">
            {info[0] !== "" && <p onClick={() => handleCampusClick(setState,setRoomPop)}> {info[0]}</p>}
            {info[0] !== "" && info[1] !== "" && <p> {"/"} </p>}

            {info[1] !== "" && <p  >{"Building " + info[1]}</p>}
            {info[1] !== "" && info[2] !== "" && <p> {"/"} </p>}

            {info[2] !== "" && <p  >{"Floor " + info[2]}</p>}
        </div>

    )
}

export default MapInformation;
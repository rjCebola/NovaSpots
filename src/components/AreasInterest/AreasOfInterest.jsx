import CampusMapAreasOfInterest from "./CampusMapAreasOfInterest";
import Ed7General from "./Ed7/Ed7General";

function AreasOfInterst({ state, setState, building, setBuilding, setMapPopUps, setRoomPop }) {
    return <>
        {state === "map" && <CampusMapAreasOfInterest setState={setState} setBuilding={setBuilding} setMapPopUps={setMapPopUps}/>}
        {state === "building" && building[0] === 7 && <Ed7General building={building} setRoomPop={setRoomPop}/>}
    </>
}

export default AreasOfInterst;
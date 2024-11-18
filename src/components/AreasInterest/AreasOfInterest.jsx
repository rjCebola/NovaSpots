import CampusMapAreasOfInterest from "./CampusMapAreasOfInterest";
import Ed7General from "./Ed7/Ed7General";

function AreasOfInterst({ state, setState, building, setBuilding }) {
    console.log(building)
    return <>
        {state === "map" && <CampusMapAreasOfInterest setState={setState} setBuilding={setBuilding}/>}
        {state === "building" && building[0] === 7 && <Ed7General building={building}/>}
    </>
}

export default AreasOfInterst;
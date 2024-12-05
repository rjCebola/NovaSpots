import CampusMapAreasOfInterest from "./CampusMapAreasOfInterest";
import Ed7General from "./Ed7/Ed7General";

function AreasOfInterst({ state, setState, building, setBuilding, setMapPopUps, setRoomPop, setFoodCourt, viewProfile, setViewProfile }) {
    return <>
        {state === "map" && <CampusMapAreasOfInterest setState={setState} setBuilding={setBuilding} setMapPopUps={setMapPopUps} setFoodCourt={setFoodCourt} viewProfile={viewProfile} setViewProfile={setViewProfile}/>}
        {state === "building" && building[0] === 7 && <Ed7General building={building} setRoomPop={setRoomPop} viewProfile={viewProfile} setViewProfile={setViewProfile}/>}
    </>
}

export default AreasOfInterst;
import { Ed7FirstFloor, Ed7SecondFloor, Ed7ThirdFloor } from "./Ed7Floors";

function Ed7General({ building, setRoomPop}) {


    return <>
        {building[1] === 1 && <Ed7FirstFloor setRoomPop={setRoomPop}/>}
        {building[1] === 2 && <Ed7SecondFloor/>}
        {building[1] === 3 && <Ed7ThirdFloor/>}
    </>
}

export default Ed7General;
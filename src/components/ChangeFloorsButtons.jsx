import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ed7Floors = 3;


function ChangeFloorsButton({ building, setBuilding }) {

    let floors = 1;
    if (building[0] === 7) floors = ed7Floors;


    return <>

        <div className="fixed bottom-0 right-0 z-[999] mb-4 mr-4 bg-white p-2 rounded-2xl flex flex-col justify-between items-center shadow-2xl shadow-black">
            <FontAwesomeIcon
                onClick={() => { 
                    if(floors > building[1]) setBuilding([building[0], building[1] + 1]) 
                }}
                icon={faArrowUp}
                className={"h-8 w-8 " + (floors > building[1] ? "text-[#0462b9]" : "text-gray-500")}
            />
            <div className="h-px w-full bg-gray-300 my-2" />
            <FontAwesomeIcon
                onClick={() => {
                    if(building[1] > 1) setBuilding([building[0], building[1] - 1])
                }}
                icon={faArrowDown}
                className={"h-8 w-8 " + (building[1] > 1 ? "text-[#0462b9]" : "text-gray-500")}
            />
        </div>

    </>
}

export default ChangeFloorsButton;


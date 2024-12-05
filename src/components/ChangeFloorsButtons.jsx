import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import PreventPullToRefresh from './PreventPullToRefresh';

const ed7Floors = 3;


function ChangeFloorsButton({ building, setBuilding }) {

    let floors = 1;
    if (building[0] === 7) floors = ed7Floors;

    const [shrinkUp, setShrinkUp] = useState('scale(1)');
    const [shrinkDown, setShrinkDown] = useState('scale(1)');


  
    const handleButtonClick = (button) => {
      handleShrinkStart(button);
      setTimeout(() => {
        handleShrinkEnd(button);
      }, 75);
    }
      const handleShrinkStart = (button) => {
        if(button === 'upButton'){
            setShrinkUp('scale(0.8)');
        }
        else {
            setShrinkDown('scale(0.8)');
        }
      }
  
      const handleShrinkEnd = (button) => {
        if(button === 'upButton'){
            setShrinkUp('scale(1)');
        }
        else {
            setShrinkDown('scale(1)');
        }
      }

    return <>
        <PreventPullToRefresh>
        <div className="fixed bottom-0 right-0 z-[999] mb-4 mr-4 bg-white p-2 rounded-2xl flex flex-col justify-between items-center shadow-2xl shadow-black">
            <FontAwesomeIcon
                onClick={() => { 
                    if(floors > building[1]){
                        setBuilding([building[0], building[1] + 1]);
                        handleButtonClick("upButton");
                    }
                }}
                style={{transform : shrinkUp, transition:'0.075s'}}
                icon={faArrowUp}
                className={"h-8 w-8 " + (floors > building[1] ? "text-[#0462b9]" : "text-gray-500")}
            />
            <div className="h-px w-full bg-gray-300 my-2" />
            <FontAwesomeIcon
                onClick={() => {
                    if(building[1] > 1){
                        setBuilding([building[0], building[1] - 1]);
                        handleButtonClick("downButton");
                    }
                }}
                style={{transform : shrinkDown, transition:'0.075s'}}
                icon={faArrowDown}
                className={"h-8 w-8 " + (building[1] > 1 ? "text-[#0462b9]" : "text-gray-500")}
            />
        </div>
        </PreventPullToRefresh>
    </>
}

export default ChangeFloorsButton;


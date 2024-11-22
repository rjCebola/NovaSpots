import { Polygon } from "react-leaflet";


function CampusMapAreasOfInterest({ setState, setBuilding, setMapPopUps, setFoodCourt }) {

    return (<>
        {
            //Ed 7
        }
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "transparent" }}
            positions={[[800, 680],
            [800, 890],
            [580, 890],
            [580, 680],]}
            eventHandlers={{
                click: () => {
                    setState("building");
                    setBuilding([7, 1]);
                },
            }}
        />
        {
            //Cantina
        }
        <Polygon
            className="z-[1000]"
            pathOptions={{ color: "transparent" }}
            positions={[[1070, 900],
            [1070, 1110],
            [980, 1110],
            [980, 1000],
            [900, 1000],
            [900, 900],]}
            eventHandlers={{
                click: () => {
                    setMapPopUps("canteen");
                    setFoodCourt("Canteen")
                },
            }}
        />
    </>

    )


}

export default CampusMapAreasOfInterest;
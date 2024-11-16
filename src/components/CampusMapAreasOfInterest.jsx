import { MapContainer, TileLayer, Polygon } from "react-leaflet";


function CampusMapAreasOfInterest({setState, setBuilding}) {

    return (
        //Ed 7
        <Polygon
            className="z-[1000]"
            pathOptions={{color: "transparent"}}
            positions={[[800, 680],
            [800, 890],
            [580, 890],
            [580, 680],]}
            eventHandlers={{
                click: () => {
                    setState("building");
                    setBuilding([7,1]);
                },
            }}
        />
    )


}

export default CampusMapAreasOfInterest;
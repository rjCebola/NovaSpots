function MapInformation({ state, building }) {

    const info = ["Campus", "", ""]

    if (state === "building") {
        info[1] = "Edificio 7" //depende do edificio atual
        info[2] = "1st Floor" // depende do andar atual
    }


    return (
        <div className="flex gap-1 text-base">
            {info[0] !== "" && <p  > {info[0]}</p>}
            {info[0] !== "" && info[1] !== "" && <p> {"/"} </p>}

            {info[1] !== "" && <p  >{info[1]}</p>}
            {info[1] !== "" && info[2] !== "" && <p> {"/"} </p>}

            {info[2] !== "" && <p  >{info[2]}</p>}
        </div>

    )
}

export default MapInformation;
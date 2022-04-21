import React from "react";
import { Location } from "../../types/location";
import CardArea from "./components/card/card-area.component";
import Map from "./components/map/map.component";
import useLocations from "./hooks/useLocations";

const HomePage = () => {
    const { locations, errorMessage } = useLocations();
    if (errorMessage) {
        return(
            <div>{errorMessage}</div>
        );
    }
    return(
        <>
            <Map locations={locations}/>
            <CardArea locations={locations} />
        </>
    );
};

export default HomePage;
import React from "react";
import { Location } from "../../types/location";
import Map from "./components/map/map.component";
import useLocations from "./hooks/useLocations";

const HomePage = () => {
    const { locations } = useLocations();
    return(
        <Map locations={locations}/>
    );
};

export default HomePage;
import React from "react";
import { Location } from "../../types/location";
import CardArea from "./components/card/card-area.component";
import Map from "./components/map/map.component";
import useLocations from "../../hooks/useLocations";
import ProfileButton from "../../components/profile-button.component";
import Div100vh from "react-div-100vh";

const HomePage = () => {
    const { locations, errorMessage } = useLocations();
    if (errorMessage) {
        return(
            <div>{errorMessage}</div>
        );
    }
    return(
        <>
            <ProfileButton />
            <Div100vh>
                <Map locations={locations}/>
                <CardArea locations={locations} />
            </Div100vh>
        </>
    );
};

export default HomePage;
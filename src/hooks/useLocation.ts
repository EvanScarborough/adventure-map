import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../api/api";
import { Adventure } from "../types/adventure";
import { Location } from "../types/location";
import AuthContext from "./auth-context";

const useLocation = (locationId: number) => {
    const auth = React.useContext(AuthContext);
    const [location, setLocation] = useState<Location|null>(null);
    const [adventures, setAdventures] = useState<Adventure[]|null>(null);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            get<Location>(`/location/${locationId}`, auth)
                .then(response => {
                    if (!response.error) {
                        setLocation(response.data);
                    }
                    else if (response.status == 401) {
                        navigate("/login");
                    }
                    else {
                        setErrorMessage(response.errorMessage);
                    }
                })
                .catch(e => console.log(e));

            get<Adventure[]>(`/adventure/location/${locationId}`, auth)
                .then(response => {
                    if (!response.error) {
                        setAdventures(response.data);
                    }
                    else {
                        setErrorMessage(response.errorMessage);
                    }
                })
                .catch(e => console.log(e));
        }
    }, [locationId, auth?.userId]);

    return {
        location: location,
        adventures: adventures,
        errorMessage: errorMessage
    };
};

export default useLocation;
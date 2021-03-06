import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../api/api";
import { Adventure } from "../types/adventure";
import { Location } from "../types/location";
import AuthContext from "./auth-context";

const useLocation = (locationId: number|null) => {
    const auth = React.useContext(AuthContext);
    const [location, setLocation] = useState<Location|null>(null);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (auth && locationId !== null) {
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
        }
    }, [locationId, auth?.userId]);

    return {
        location: location,
        errorMessage: errorMessage
    };
};

export default useLocation;
import React from "react";
import { useEffect, useState } from "react";
import { get } from "../api/api";
import { Adventure } from "../types/adventure";
import AuthContext from "./auth-context";

const useLocationAdventures = (locationId: number) => {
    const auth = React.useContext(AuthContext);
    const [adventures, setAdventures] = useState<Adventure[]|null>(null);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    useEffect(() => {
        if (auth) {
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
        adventures: adventures,
        errorMessage: errorMessage
    };
};

export default useLocationAdventures;
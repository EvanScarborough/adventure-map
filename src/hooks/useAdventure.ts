import React from "react";
import { useEffect, useState } from "react";
import { get } from "../api/api";
import { Adventure } from "../types/adventure";
import AuthContext from "./auth-context";

const useAdventure = (adventureId: number) => {
    const auth = React.useContext(AuthContext);
    const [adventure, setAdventure] = useState<Adventure|null>(null);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    useEffect(() => {
        if (auth) {
            get<Adventure>(`/adventure/${adventureId}`, auth)
                .then(response => {
                    if (!response.error) {
                        setAdventure(response.data);
                    }
                    else {
                        setErrorMessage(response.errorMessage);
                    }
                })
                .catch(e => console.log(e));
        }
    }, [adventureId, auth?.userId]);

    return {
        adventure: adventure,
        errorMessage: errorMessage
    };
};

export default useAdventure;
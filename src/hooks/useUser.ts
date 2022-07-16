import React, { useEffect, useState } from "react";
import { get } from "../api/api";
import { UserDetails } from "../types/responses/user-details";
import AuthContext from "./auth-context";

const useUser = (userId: number) => {
    const auth = React.useContext(AuthContext);
    const [user, setUser] = useState<UserDetails|null>(null);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    useEffect(() => {
        get<UserDetails>(`/user/${userId}`, auth)
            .then(response => {
                if (!response.error) {
                    setUser(response.data);
                }
                else {
                    setErrorMessage(response.errorMessage);
                }
            })
            .catch(e => {
                setErrorMessage("Something went wrong.");
            });
    }, [auth?.userId]);

    return {
        user: user,
        errorMessage: errorMessage
    };
};

export default useUser;
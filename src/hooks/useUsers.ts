import React, { useEffect, useState } from "react";
import { get } from "../api/api";
import { User } from "../types/user";
import AuthContext from "./auth-context";

const useUsers = () => {
    const auth = React.useContext(AuthContext);
    const [users, setUsers] = useState<User[]>([]);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    useEffect(() => {
        if (auth) {
            get<User[]>('/user', auth)
                .then(response => {
                    if (!response.error) {
                        setUsers(response.data);
                    }
                    else {
                        setErrorMessage(response.errorMessage);
                    }
                })
                .catch(e => {
                    setErrorMessage("Something went wrong.");
                });
        }
    }, [auth?.userId]);

    return {
        users: users,
        errorMessage: errorMessage
    };
};

export default useUsers;
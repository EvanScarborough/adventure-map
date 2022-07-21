import React, { useEffect, useState } from "react";
import { get, post, postFile } from "../api/api";
import { PreviewFile } from "../components/image-uploader.component";
import { UserDetails } from "../types/responses/user-details";
import { User } from "../types/user";
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

    const postProfilePic = (file: PreviewFile) => {
        return postFile<User>('/user/profilepic', file, auth);
    };

    return {
        user: user,
        errorMessage: errorMessage,
        postProfilePic
    };
};

export default useUser;
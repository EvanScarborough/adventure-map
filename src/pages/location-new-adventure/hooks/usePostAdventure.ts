import { useContext } from "react";
import { post } from "../../../api/api";
import AuthContext from "../../../hooks/auth-context";
import { Adventure } from "../../../types/adventure";
import NewAdventureRequest from "../../../types/requests/new-adventure-request";

const usePostAdventure = () => {
    const auth = useContext(AuthContext);

    return (request: NewAdventureRequest): Promise<Adventure|void> => {
        return post<Adventure|void>('/adventure', request, auth)
            .then(response => {
                return response.data;
            });
    };
}

export default usePostAdventure;
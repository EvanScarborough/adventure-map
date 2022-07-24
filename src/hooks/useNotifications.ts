import { useContext, useEffect, useState } from "react";
import { get } from "../api/api";
import UserNotification from "../types/responses/notification";
import AuthContext from "./auth-context";


const useNotifications = () => {
    const auth = useContext(AuthContext);
    const [ notifications, setNotifications ] = useState<UserNotification[]>([]);

    useEffect(() => {
        if (!auth) return;

        get<UserNotification[]>('/notification', auth)
            .then(res => {
                if (!res.error) setNotifications(res.data);
                else console.log(res.errorMessage);
            })
            .catch(e => console.log(e));
    }, [ auth?.userId ]);

    return notifications;
};

export default useNotifications;
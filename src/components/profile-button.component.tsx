import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../hooks/auth-context";
import { ProfileButtonHolder } from "./basic.styled";
import UserBadge from "./user-badge.component";


const ProfileButton = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <ProfileButtonHolder
            onClick={() => auth ? navigate(`/user/${auth.userId}`) : navigate('/login')}>
            <UserBadge imageOnly hideTooltip
                user={
                    auth 
                    ?
                        { userId: auth.userId, displayName: auth.displayName, profilePictureUrl: auth.profilePictureUrl }
                    :
                        null
                }/>
        </ProfileButtonHolder>
    );
};

export default ProfileButton;
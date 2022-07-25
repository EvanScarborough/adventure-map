import ReactTooltip from "react-tooltip";
import { User } from "../types/user";
import { HugeUserBadgeImage, LargeUserBadgeImage, MissingImageProfile, MissingImageProfileText, RowLayout, UserBadgeHolder, UserBadgeImage } from "./basic.styled";
import { Body } from "./typography.styled";
import anonymousImage from "../images/anonymous.png";

const missingImageColors = ["#708a34","#45a361","#5fc7a6","#1b8765","#239e98","#4ea1ad","#19484f","#1f5480","#97c232",
"#425180","#61508a","#4d345e","#805382","#8f577d","#803751","#b05464","#bf3232","#c4512b","#c4822b","#e8c61a","#c4cc31"];

const UserImage = ({ user }: { user: User|null }) => {
    if (!user) return <img src={anonymousImage}/>;
    if (!user.profilePictureUrl) {
        var abriv = "";
        if (user.displayName.length <= 2) abriv = user.displayName.toUpperCase();
        else {
            abriv = user.displayName.split(' ').map(w => w.length > 0 ? w[0] : '').join('').toUpperCase();
        }
        return <MissingImageProfile color={missingImageColors[user.userId % missingImageColors.length]}>
            <MissingImageProfileText>{abriv}</MissingImageProfileText>
        </MissingImageProfile>;
    }
    return <img src={user.profilePictureUrl} />;
};

interface UserBadgeProps {
    user: User|null,
    imageOnly?: boolean,
    small?: boolean,
    hideTooltip?: boolean,
    huge?: boolean
};
const UserBadge = ({ user, imageOnly, small, hideTooltip, huge }: UserBadgeProps) => {
    if (imageOnly) {
        return (
            <UserBadgeHolder>
                <a data-tip={hideTooltip ? false : true} data-for={`user-badge-${user?.userId ?? 'anon'}`}
                    href={user ? `/user/${user?.userId}` : '/login'}>
                    {
                        small
                        ?
                            <UserBadgeImage>
                                <UserImage user={user}/>
                            </UserBadgeImage>
                        :
                            huge
                            ?
                                <HugeUserBadgeImage>
                                    <UserImage user={user}/>
                                </HugeUserBadgeImage>
                            :
                                <LargeUserBadgeImage>
                                    <UserImage user={user}/>
                                </LargeUserBadgeImage>
                    }
                </a>
                {
                    hideTooltip === true
                    ?
                        <></>
                    :
                        <ReactTooltip id={`user-badge-${user?.userId ?? 'anon'}`} effect='solid'>
                            <span>{user?.displayName ?? 'Anonymous'}</span>
                        </ReactTooltip>
                }
            </UserBadgeHolder>
        );
    }
    return (
        <UserBadgeHolder>
            <a href={user ? `/user/${user?.userId}` : '/login'}>
                <RowLayout>
                    <UserBadgeImage>
                        <UserImage user={user}/>
                    </UserBadgeImage>
                    <Body padding="0 0 0 8px">{user?.displayName ?? 'Anonymous'}</Body>
                </RowLayout>
            </a>
        </UserBadgeHolder>
    );
};

export default UserBadge;
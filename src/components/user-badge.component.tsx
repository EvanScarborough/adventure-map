import ReactTooltip from "react-tooltip";
import { User } from "../types/user";
import { LargeUserBadgeImage, RowLayout, UserBadgeImage } from "./basic.styled";
import { Body } from "./typography.styled";

interface UserBadgeProps {
    user: User,
    imageOnly?: boolean,
    small?: boolean
};
const UserBadge = ({ user, imageOnly, small }: UserBadgeProps) => {
    if (imageOnly) {
        return (
            <div>
                <a data-tip data-for={`user-badge-${user.userId}`}>
                    {
                        small
                        ?
                            <UserBadgeImage/>
                        :
                            <LargeUserBadgeImage/>
                    }
                </a>
                <ReactTooltip id={`user-badge-${user.userId}`} effect='solid'>
                    <span>{user.displayName}</span>
                </ReactTooltip>
            </div>
        );
    }
    return (
        <RowLayout>
            <UserBadgeImage/>
            <Body padding="0 0 0 8px">{user.displayName}</Body>
        </RowLayout>
    );
};

export default UserBadge;
import { User } from "../types/user";
import { RowLayout, UserBadgeImage } from "./basic.styled";
import { Body } from "./typography.styled";

interface UserBadgeProps {
    user: User
};
const UserBadge = ({ user }: UserBadgeProps) => {
    return (
        <RowLayout>
            <UserBadgeImage/>
            <Body padding="0 0 0 8px">{user.displayName}</Body>
        </RowLayout>
    );
};

export default UserBadge;
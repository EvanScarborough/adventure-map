import { useParams } from "react-router-dom";
import { ColumnLayout } from "../../components/basic.styled";
import UserBadge from "../../components/user-badge.component";
import useUser from "../../hooks/useUser";
import { UserHeroArea } from "./user.styled";


const UserPage = () => {
    const { userId } = useParams<{ userId: string }>();
    const { user } = useUser(+(userId as string));

    return (
        <>
            <UserHeroArea />
            <ColumnLayout>
                <UserBadge user={user?.user ?? null} huge imageOnly hideTooltip/>
            </ColumnLayout>
        </>
    )
};

export default UserPage;
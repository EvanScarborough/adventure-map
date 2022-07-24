import { Body } from "../../../components/typography.styled";
import UserBadge from "../../../components/user-badge.component";
import UserNotification from "../../../types/responses/notification";
import { NotificationBadgeArea, NotificationButton } from "../user.styled";

interface NotificationBadgeProps {
    notification: UserNotification
};


const AddedToAdventureNotification = ({ notification }: NotificationBadgeProps) => {
    return (
        <NotificationBadgeArea>
            <UserBadge user={notification.user} imageOnly small/>
            <Body margin="0 8px 0 8px">{notification.text}</Body>
            <NotificationButton href={`/adventure/${notification.props['adventureId']}/review`}>Add a Review</NotificationButton>
        </NotificationBadgeArea>
    );
};



const NotificationBadge = ({ notification }: NotificationBadgeProps) => {
    switch (notification.notificationType) {
        case 'AddedToAdventure':
            return <AddedToAdventureNotification notification={notification} />;
        default:
            return <>Hmmm</>;
    }
};

export default NotificationBadge;
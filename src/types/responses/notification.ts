import { User } from "../user";
import { NotificationType } from "./notification-type";

export default interface UserNotification {
    notificationType: NotificationType,
    text: string,
    user: User,
    createdAt: Date,
    props: { [key: string]: string }
};
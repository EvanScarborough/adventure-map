import { AdventureMember } from "./adventure-member";
import { User } from "./user";

export interface Adventure {
    adventureId: number,
    locationId: number,
    time: Date,
    rating: number,
    description: string,
    addedByUser: User,
    members: AdventureMember[],
    isPrivate: boolean
};
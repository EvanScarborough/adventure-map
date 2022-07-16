import { User } from "./user";

export interface AdventureMember {
    adventureMemberId: number,
    user: User,
    isPrimary: boolean,
    rating: number,
    comment: string,
    isPrivate: boolean,
    isCompleted: boolean,
    imageUrls: string[]
};
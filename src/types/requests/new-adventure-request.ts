import { User } from "../user";

export default interface NewAdventureRequest {
    locationId: number,
    time: Date,
    description: string,
    members: User[],
    isPrivate: boolean,
    rating: number,
    comment: string
};
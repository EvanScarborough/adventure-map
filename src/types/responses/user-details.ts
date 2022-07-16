import { Adventure } from "../adventure";
import { User } from "../user";

export interface UserDetails {
    user: User,
    detailsHidden: boolean,
    adventures?: Adventure[] | null
};
import { UserRole } from "./user-role";

export default interface Auth {
    userId:number,
    displayName:string,
    email:string,
    role:UserRole,
    profilePictureUrl?:string|null,
    token:string
};
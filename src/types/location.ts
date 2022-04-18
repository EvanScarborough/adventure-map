import { LocationType } from "./location-type";
import { User } from "./user";

export interface Location {
    locationId:number,
    name:string,
    description:string,
    locationType:LocationType,
    addressLine1:string,
    addressLine2?:string,
    city:string,
    state:string,
    zipCode?:string,
    country:string,
    neighborhood?:string,
    latitude:number,
    longitude:number,
    addedByUser:User,
    addedAtTime:Date,
    isPrivate:boolean,
    rating:number,
    myRating:number,
    adventureCount:number,
    myAdventureCount:number
};
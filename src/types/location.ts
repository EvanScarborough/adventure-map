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
    addedByUser?:User,
    addedAtTime?:Date,
    isPrivate:boolean,
    rating?:number,
    myRating?:number,
    adventureCount?:number,
    myAdventureCount?:number
};

export const getBlankLocation = (): Location => {
    return {
        locationId: 0,
        name: "",
        description: "",
        locationType: "Experience",
        addressLine1: "",
        city: "",
        state: "",
        country: "",
        latitude: 0,
        longitude: 0,
        addedByUser: { userId: 0, displayName: "" },
        addedAtTime: new Date(),
        isPrivate: false,
        rating: 0,
        myRating: 0,
        adventureCount: 0,
        myAdventureCount: 0
    };
};
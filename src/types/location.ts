import { LocationType } from "./location-type";

export interface Location {
    LocationId:number,
    Name:string,
    Description:string,
    LocationType:LocationType,
    AddressLine1:string,
    AddressLine2?:string,
    City:string,
    State:string,
    ZipCode?:string,
    Country:string,
    AreaName?:string,
    Latitude:number,
    Longitude:number,
    AddedByUserId:number,
    AddedAtTime:Date,
    IsPrivate:boolean
};
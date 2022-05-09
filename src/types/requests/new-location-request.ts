import { Location } from "../location";
import { LocationType } from "../location-type";

export default interface NewLocationRequest {
    name: string,
    description: string,
    locationType: LocationType,
    addressLine1: string,
    addressLine2?: string,
    city: string,
    neighborhood?: string,
    state: string,
    country: string,
    zipCode?: string,
    latitude: number,
    longitude: number,
    isPrivate: boolean
};

export const buildNewLocationRequest = (location: Location): NewLocationRequest => {
    return {
        name: location.name,
        description: location.description,
        locationType: location.locationType,
        addressLine1: location.addressLine1,
        addressLine2: location.addressLine2,
        city: location.city,
        neighborhood: location.neighborhood,
        state: location.state,
        country: location.country,
        zipCode: location.zipCode,
        latitude: location.latitude,
        longitude: location.longitude,
        isPrivate: location.isPrivate
    }
};
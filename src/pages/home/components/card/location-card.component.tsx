import { Location } from "../../../../types/location";


interface LocationCardProps {
    location:Location
};
const LocationCard = ({ location }:LocationCardProps) => {
    return (
        <div>
            {location.name}
        </div>
    );
};

export default LocationCard;
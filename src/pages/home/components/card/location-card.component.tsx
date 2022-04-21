import { RowLayout } from "../../../../components/basic.styled";
import { SmallTitle } from "../../../../components/typography.styled";
import { Location } from "../../../../types/location";
import { LocationCardArea, MarkerDot } from "../../home.styled";


interface LocationCardProps {
    location:Location
};
const LocationCard = ({ location }:LocationCardProps) => {
    return (
        <LocationCardArea>
            <RowLayout>
                <MarkerDot locationType={location.locationType} adventureCount={location.myAdventureCount} displaySimple={1}/>
                <SmallTitle>{location.name}</SmallTitle>
            </RowLayout>
            
        </LocationCardArea>
    );
};

export default LocationCard;
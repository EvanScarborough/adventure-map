import { RowLayout } from "../../../../components/basic.styled";
import Rating from "../../../../components/rating.component";
import { Body, SmallTitle } from "../../../../components/typography.styled";
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
            <Rating rating={3.5}/>
            <Body>{location.description}</Body>
        </LocationCardArea>
    );
};

export default LocationCard;
import { RowLayout } from "../../../../components/basic.styled";
import Rating from "../../../../components/rating.component";
import { Body, SmallNote, SmallTitle } from "../../../../components/typography.styled";
import { Location } from "../../../../types/location";
import { LocationCardArea, LocationCardBodyArea, LocationCardMarkerArea, MarkerDot } from "../../home.styled";


interface LocationCardProps {
    location:Location
};
const LocationCard = ({ location }:LocationCardProps) => {
    return (
        <LocationCardArea>
            <LocationCardMarkerArea locationType={location.locationType} adventureCount={location.myAdventureCount}>
                <MarkerDot locationType={location.locationType} adventureCount={location.myAdventureCount} displaySimple={1}/>
            </LocationCardMarkerArea>
            <LocationCardBodyArea>
                <SmallTitle margin="0">{location.name}</SmallTitle>
                <RowLayout>
                    <Rating rating={4.5}/>
                    <SmallNote padding="0 0 0 20px" color="#ccc">
                        {location.myAdventureCount > 0 ? `${location.myAdventureCount} Adventures` : "No Adventures Yet"}
                    </SmallNote>
                </RowLayout>
                <Body margin="0">{location.description}</Body>
            </LocationCardBodyArea>
        </LocationCardArea>
    );
};

export default LocationCard;
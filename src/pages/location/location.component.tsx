import { useNavigate, useParams } from "react-router-dom";
import useLocation from "../../hooks/useLocation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Body, SectionHeader, SmallNote, Title } from "../../components/typography.styled";
import { LocationBodyArea, LocationHeroArea, LocationTitleArea } from "./location.styled";
import { MarkerDot } from "../home/home.styled";
import Rating from "../../components/rating.component";
import { Button, ColumnLayout, Spacer } from "../../components/basic.styled";
import AdventureCard from "./components/adventure-card.component";

const LocationPage = () => {
    const { locationId } = useParams();
    const { location, adventures, errorMessage } = useLocation(+(locationId as string));

    const navigate = useNavigate();

    return (
        <>
            <LocationHeroArea>
                <LocationTitleArea>
                    <MarkerDot 
                        locationType={location?.locationType ?? "Restaurant"}
                        adventureCount={location?.myAdventureCount ?? 1}
                        displaySimple={1}
                        large={1}
                        />
                    {location ? <Title center={1}>{location.name}</Title> : <Skeleton height="1.8em" width="300px" />}
                    <Rating icon="Star" rating={location?.myRating ?? 0}/>
                </LocationTitleArea>
            </LocationHeroArea>
            <LocationBodyArea>
                {
                    location
                    ?
                        <>
                            <SmallNote margin="8px auto">{location.addressLine1 + (location.addressLine2 ?  location.addressLine2 : "") + ", " + location.city}</SmallNote>
                            <SectionHeader margin="32px 0 0 0">About</SectionHeader>
                            <Body>{location.description}</Body>
                            <SectionHeader margin="48px 0 0 0">Adventures</SectionHeader>
                            <Button onClick={() => navigate(`new-adventure`)}>Add Adventure</Button>
                            {
                                adventures
                                ?
                                    <ColumnLayout>
                                        {
                                            adventures.length === 0
                                            ?
                                                <SmallNote>No Adventures Yet!</SmallNote>
                                            :
                                                adventures.map((a,i) => <AdventureCard key={i} adventure={a}/>)
                                        }
                                    </ColumnLayout>
                                :
                                    <Skeleton height="4em" count={3} />
                            }
                        </>
                    :
                        <>
                            <Spacer height="8px"/>
                            <Skeleton height="0.8em" width="200px" />
                            <SectionHeader margin="32px 0 0 0">About</SectionHeader>
                            <Skeleton height="0.8em" count={3} />
                            <SectionHeader margin="48px 0 0 0">Adventures</SectionHeader>
                            <Skeleton height="4em" count={3} />
                        </>
                }
            </LocationBodyArea>
        </>
    );
};

export default LocationPage;
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocation from "../../hooks/useLocation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Body, SectionHeader, SmallNote, Title } from "../../components/typography.styled";
import { LocationBodyArea, LocationHeroArea, LocationTitleArea, ModalImage } from "./location.styled";
import { MarkerDot } from "../home/home.styled";
import Rating from "../../components/rating.component";
import { Button, ColumnLayout, Spacer } from "../../components/basic.styled";
import AdventureCard from "./components/adventure-card.component";
import ProfileButton from "../../components/profile-button.component";
import Modal from "../../components/modal.component";
import BackToMapButton from "../../components/back-to-map-button.component";
import useLocationAdventures from "../../hooks/useLocationAdventures";

const LocationPage = () => {
    const { locationId } = useParams();
    const { location, errorMessage } = useLocation(+(locationId as string));
    const { adventures } = useLocationAdventures(+(locationId as string));
    const [ imageModalUrl, setImageModalUrl ] = useState("");
    const [ showImage, setShowImage ] = useState(false);
    const openImageModal = (url: string) => {
        setImageModalUrl(url);
        setShowImage(true);
    };
    const images = adventures?.map(a => a.members).flat().map(m => m.imageUrls).flat();
    const heroImage = images && images.length > 0 ? images[Math.floor(Math.random() * images.length)] : null;

    const navigate = useNavigate();

    return (
        <>
            <ProfileButton />
            <BackToMapButton />
            <LocationHeroArea imageUrl={heroImage}>
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
                            {location.description && 
                                <>
                                    <SectionHeader margin="32px 0 0 0">About</SectionHeader>
                                    <Body>{location.description}</Body>
                                </>
                            }
                            <SectionHeader margin="48px 0 0 0">Adventures</SectionHeader>
                            <Button onClick={() => navigate(`new-adventure`)}>Add Adventure</Button>
                            {
                                adventures
                                ?
                                    <ColumnLayout margin="0 8px 32px 8px">
                                        {
                                            adventures.length === 0
                                            ?
                                                <SmallNote>No Adventures Yet!</SmallNote>
                                            :
                                                adventures.map((a,i) => <AdventureCard key={i} adventure={a} openImageModal={openImageModal}/>)
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
            <Modal show={showImage} onClose={() => setShowImage(false)}>
                <ModalImage src={imageModalUrl as string}/>
            </Modal>
        </>
    );
};

export default LocationPage;
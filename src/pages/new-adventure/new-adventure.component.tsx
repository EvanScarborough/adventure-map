import { useState } from "react";
import { BackgroundArea, Button, DottedDivider, MainArea, PageArea } from "../../components/basic.styled";
import { FancyHeader } from "../../components/typography.styled";
import useLocations from "../../hooks/useLocations";
import { Location } from "../../types/location";
import LocationInput from "./components/location-input/location-input.component";
import ConfirmMap from "./components/confirm-map/confirm-map.component";

const NewAdventurePage = () => {
    const { locations } = useLocations();
    const [selectedLocation, setSelectedLocation] = useState<Location|null>(null);

    return (
        <PageArea>
            <BackgroundArea/>
            <MainArea>
                <FancyHeader center={1}>New Adventure!</FancyHeader>
                <DottedDivider />
                <LocationInput locations={locations} selectLocation={setSelectedLocation} />
                {
                    selectedLocation && <>
                        <ConfirmMap lat={selectedLocation.latitude} lng={selectedLocation.longitude} />
                        <Button>Continue</Button>
                    </>
                }
            </MainArea>
        </PageArea>
    );
};

export default NewAdventurePage;
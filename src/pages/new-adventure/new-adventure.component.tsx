import { BackgroundArea, DottedDivider, MainArea, PageArea } from "../../components/basic.styled";
import { FancyHeader } from "../../components/typography.styled";
import useLocations from "../../hooks/useLocations";
import LocationInput from "./components/location-input/location-input.component";


const NewAdventurePage = () => {
    const { locations } = useLocations();

    return (
        <PageArea>
            <BackgroundArea/>
            <MainArea>
                <FancyHeader>New Adventure!</FancyHeader>
                <DottedDivider />
                <LocationInput locations={locations} />
                <p>This is some text</p>
            </MainArea>
        </PageArea>
    );
};

export default NewAdventurePage;
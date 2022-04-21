import { useState } from "react";
import { Location } from "../../../../types/location";
import { CardHolderArea, ShowControlPanelButton, SideControlPanel } from "../../home.styled";
import LocationCard from "./location-card.component";
import { FiMenu, FiX } from "react-icons/fi";
import { FancyHeader } from "../../../../components/typography.styled";
import { DottedDivider } from "../../../../components/basic.styled";

interface CardAreaProps {
    locations:Location[]
};
const CardArea = ({ locations }:CardAreaProps) => {
    const [show, setShow] = useState(false);
    return (
        <SideControlPanel show={show ? 1 : 0}>
            <ShowControlPanelButton
                show={show ? 1 : 0}
                onClick={()=>setShow(!show)}>
                {show ? <FiX size="24px"/> : <FiMenu size="24px"/>}
            </ShowControlPanelButton>
            <FancyHeader padding="8px 24px">Locations</FancyHeader>
            <DottedDivider centeringMargin={1}/>
            <CardHolderArea>
                {locations.map(l => <LocationCard key={l.locationId} location={l}/>)}
            </CardHolderArea>
        </SideControlPanel>
    )
};

export default CardArea;
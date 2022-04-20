import { useState } from "react";
import { Location } from "../../../../types/location";
import { ShowControlPanelButton, SideControlPanel } from "../../home.styled";
import LocationCard from "./location-card.component";
import { FiMenu, FiX } from "react-icons/fi";

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
            {locations.map(l => <LocationCard key={l.locationId} location={l}/>)}
        </SideControlPanel>
    )
};

export default CardArea;
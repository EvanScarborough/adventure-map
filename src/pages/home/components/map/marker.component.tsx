import { Location } from "../../../../types/location";
import { LocationType } from "../../../../types/location-type";
import { MarkerArea, MarkerDot, MarkerFlag, MarkerFlagArea } from "../../home.styled";
import Tooltip from "./tooltip.component";


interface MarkerProps {
    lat:number,
    lng:number,
    location?:Location,
    locationType?:LocationType,
    $hover?:boolean,
    disableHover?:boolean
};
const Marker = ({ lat, lng, location, locationType, $hover, disableHover }:MarkerProps) => {
    return (
        <MarkerArea hovered={$hover ? (disableHover ? 0 : 1) : 0}>
            <MarkerFlagArea hovered={$hover ? (disableHover ? 0 : 1) : 0}>
                {location && <MarkerFlag>{location.name}</MarkerFlag>}
            </MarkerFlagArea>
            <MarkerDot locationType={location?.locationType ?? locationType ?? "PointOfInterest"}
                adventureCount={location?.myAdventureCount ?? 1} />
            {/* {$hover && <Tooltip/>} */}
        </MarkerArea>
    );
};

export default Marker;
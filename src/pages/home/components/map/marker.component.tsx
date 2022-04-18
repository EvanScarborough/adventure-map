import { Location } from "../../../../types/location";
import { MarkerArea, MarkerDot, MarkerFlag } from "../../home.styled";
import Tooltip from "./tooltip.component";


interface MarkerProps {
    lat:number,
    lng:number,
    location:Location,
    $hover?:boolean
};
const Marker = ({ lat, lng, location, $hover }:MarkerProps) => {
    return (
        <MarkerArea hovered={$hover ? 1 : 0}>
            <MarkerFlag>{location.name}</MarkerFlag>
            <MarkerDot locationType={location.locationType} />
            {/* {$hover && <Tooltip/>} */}
        </MarkerArea>
    );
};

export default Marker;
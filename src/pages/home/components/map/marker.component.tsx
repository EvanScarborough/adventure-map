import { MarkerArea } from "../../home.styled";


interface MarkerProps {
    lat:number,
    lng:number,
    $hover?:boolean
};
const Marker = ({ lat, lng, $hover }:MarkerProps) => {
    //console.log($hover);
    return (
        <MarkerArea id="MARKER">

        </MarkerArea>
    );
};

export default Marker;
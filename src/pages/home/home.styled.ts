import styled from "styled-components";
import { LocationType } from "../../types/location-type";
import { MARKER_SIZE } from "./components/map/map-style";

const locationTypeMapping:Record<LocationType,string> = {
    "Restaurant":"#d04621",
    "Shopping":"#51bfab",
    "Experience":"#fcce41",
    "PointOfInterest":"#555"
}

interface MarkerAreaProps {
    hovered:number
};
export const MarkerArea = styled.div<MarkerAreaProps>`
    position: absolute;
    left: -${MARKER_SIZE / 2}px;
    top: -${MARKER_SIZE / 2}px;
    ${props => props.hovered ? "z-index: 1000;" : ""}
`;

interface MarkerDotProps {
    locationType:LocationType,
    adventureCount:number
};
export const MarkerDot = styled.div<MarkerDotProps>`
    position: absolute;
    width: ${MARKER_SIZE-4}px;
    height: ${MARKER_SIZE-4}px;
    background-color: ${props => props.adventureCount ? locationTypeMapping[props.locationType] : "#fff"};
    border: solid 2px ${props => props.adventureCount ? "white" : locationTypeMapping[props.locationType]};
    border-radius: 12px;
    box-shadow: inset -2px -2px 8px rgba(0,0,0,0.3), 2px 6px 3px rgba(0,0,0,0.2);
    cursor: pointer;
`;

interface MarkerFlagAreaProps {
    hovered:number
};
export const MarkerFlagArea = styled.div<MarkerFlagAreaProps>`
    position: absolute;
    left: ${MARKER_SIZE * 0.5}px;
    top: ${MARKER_SIZE * 0.1}px;
    height: ${MARKER_SIZE * 0.8}px;
    background-color: rgba(50,50,50,0.75);
    padding: 0;
    padding-left: ${MARKER_SIZE / 2 + 4}px;
    padding-right: 8px;
    overflow: hidden;
    transform-origin: left;
    ${props => props.hovered ? "transform: scaleX(1);" : "transform: scaleX(0);"}
    transition: transform 0.15s;
`;

//${props => props.hovered ? "max-width:500px;" : "max-width:0px;"}
//transition: max-width 0.5s, width 0.2s;

export const MarkerFlag = styled.p`
    font-size: ${MARKER_SIZE * 0.6}px;
    white-space: nowrap;
    color: white;
    padding: 0;
    margin: 0;
    margin-top: 1px;
`;
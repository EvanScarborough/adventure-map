import styled from "styled-components";
import { LocationType } from "../../types/location-type";
import { MARKER_SIZE } from "./components/map/map-style";

const locationTypeMapping:Record<LocationType,string> = {
    "Restaurant":"#d04621",
    "Shopping":"#51bfab",
    "Experience":"#fcce41",
    "Point of Interest":"#555"
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
    locationType:LocationType
};
export const MarkerDot = styled.div<MarkerDotProps>`
    position: absolute;
    width: ${MARKER_SIZE-4}px;
    height: ${MARKER_SIZE-4}px;
    background-color: ${props => locationTypeMapping[props.locationType]};
    border: solid 2px white;
    border-radius: 12px;
    box-shadow: inset -2px -2px 8px rgba(0,0,0,0.3), 2px 6px 3px rgba(0,0,0,0.2);
    cursor: pointer;
`;

export const MarkerFlag = styled.p`
    position: absolute;
    left: ${MARKER_SIZE / 2}px;
    top: -${MARKER_SIZE * 0.45}px;
    height: ${MARKER_SIZE * 0.8}px;
    font-size: ${MARKER_SIZE * 0.6}px;
    padding: 0;
    padding-left: ${MARKER_SIZE / 2 + 4}px;
    padding-right: 8px;
    display: block;
    white-space: nowrap;
    background-color: #333;
    color: white;
`;
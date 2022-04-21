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
    adventureCount:number,
    displaySimple?:number
};
export const MarkerDot = styled.div<MarkerDotProps>`
    ${props => props.displaySimple ? "" : "position: absolute;"}
    width: ${MARKER_SIZE-4}px;
    height: ${MARKER_SIZE-4}px;
    min-width: ${MARKER_SIZE-4}px;
    min-height: ${MARKER_SIZE-4}px;
    background-color: ${props => props.adventureCount ? locationTypeMapping[props.locationType] : "#fff"};
    border: solid 2px ${props => props.adventureCount ? "white" : locationTypeMapping[props.locationType]};
    border-radius: 12px;
    box-shadow: inset -2px -2px 8px rgba(0,0,0,0.3), 2px 6px 3px rgba(0,0,0,0.2);
    ${props => props.displaySimple ? "margin: 8px;" : "cursor: pointer;"}
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




interface ShowControlPanelButtonProps {
    show:number
};
export const ShowControlPanelButton = styled.button<ShowControlPanelButtonProps>`
    position: absolute;
    top: 10px;
    left: ${props => props.show ? "calc(100% - 60px)" : "100%"};
    z-index: 1001;
    border: none;
    border-radius: ${props => props.show ? "8px" : "0 8px 8px 0"};
    background-color: white;
    width: 50px;
    height: 50px;
    box-shadow: ${props => props.show ? "0 0 6px rgba(0,0,0,0.2)" : "0 0 12px rgba(0,0,0,0.5)"};
    transition: box-shadow 0.2s, left 0.2s;
`;

interface SideControlPanelProps {
    show:number
};
export const SideControlPanel = styled.div<SideControlPanelProps>`
    position: fixed;
    top: 0;
    left: ${props => props.show ? "0" : "-400px"};
    width: 400px;
    max-width: ${props => props.show ? "100vw" : "400px"};
    height: 100vh;
    z-index: 1000;
    background-color: white;
    box-shadow: 0 0 12px rgba(0,0,0,0.5);
    transition: left 0.2s;
`;

export const CardHolderArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

export const LocationCardArea = styled.div`
    width: 100%;
    margin: 4px 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
`;
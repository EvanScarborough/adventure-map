import styled from "styled-components";
import { LocationType } from "../../types/location-type";
import { MARKER_SIZE } from "./components/map/map-style";

export const locationTypeMapping:Record<LocationType,string> = {
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
    displaySimple?:number,
    large?:number
};
export const MarkerDot = styled.div<MarkerDotProps>`
    ${props => props.displaySimple ? "" : "position: absolute;"}
    width: ${props => props.large ? 40 : MARKER_SIZE-4}px;
    height: ${props => props.large ? 40 : MARKER_SIZE-4}px;
    min-width: ${props => props.large ? 40 : MARKER_SIZE-4}px;
    min-height: ${props => props.large ? 40 : MARKER_SIZE-4}px;
    background-color: ${props => props.adventureCount ? locationTypeMapping[props.locationType] : "white"};
    border: solid ${props => props.large ? 4 : 2}px ${props => props.adventureCount ? "white" : locationTypeMapping[props.locationType]};
    border-radius: ${props => props.large ? 24 : 12}px;
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
    outline: none;
    border-radius: ${props => props.show ? "8px" : "0 8px 8px 0"};
    background-color: white;
    width: 50px;
    height: 50px;
    box-shadow: ${props => props.show ? "0 2px 6px rgba(0,0,0,0.2)" : "0 0 12px rgba(0,0,0,0.5)"};
    transition: box-shadow 0.2s, left 0.2s;
    cursor: pointer;
`;

export const AddLocationButton = styled.button`
    position: absolute;
    height: 60px;
    width: calc(100% - 30px);
    bottom: 10px;
    left: 15px;
    z-index: 1001;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 1.3em;
    background-color: ${props => props.theme.color.primary.main};
    color: ${props => props.theme.color.primary.contrast};
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    cursor: pointer;
    text-transform: uppercase;
    transform: translatey(0);
    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
    &:focus, &:hover {
        background-color: ${props => props.theme.color.primary.dark};
        box-shadow: ${props => props.theme.shadow.small};
        transform: translatey(-2px);
        outline: none;
    }
    &:active {
        background-color: ${props => props.theme.color.primary.dark};
        box-shadow: 0 0 0 rgba(0,0,0,0);
        transform: translatey(0);
    }
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
export const SideControlScrollArea = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
`;

export const CardHolderArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-left: 26px;
`;

export const LocationCardArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    margin: 4px 0;
    background-color: white;
    border-radius: 8px;
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: transform 0.5s ease, box-shadow 0.5s;
    transition-timing-function: cubic-bezier(0.595, 0.005, 0.295, 1.650);
    cursor: pointer;
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 8px rgba(0,0,0,0.2);
    }
`;
interface LocationCardMarkerAreaProps {
    locationType:LocationType,
    adventureCount:number
};
export const LocationCardMarkerArea = styled.div<LocationCardMarkerAreaProps>`
    display: flex;
    align-items: center;
    background-color: ${props => props.adventureCount ? locationTypeMapping[props.locationType] : "#eee"};
    border-radius: 8px 0 0 8px;
    border-right: solid 3px ${props => props.adventureCount ? "#ccc" : locationTypeMapping[props.locationType]};
    & > div {
        margin: 0;
        margin-left: -12px;
        margin-right: 6px;
    }
`;
export const LocationCardBodyArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 8px;
`;
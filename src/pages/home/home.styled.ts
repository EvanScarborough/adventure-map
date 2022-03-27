import styled from "styled-components";
import { MARKER_SIZE } from "./components/map/map-style";

export const MarkerArea = styled.div`
    position: absolute;
    left: -${MARKER_SIZE / 2}px;
    top: -${MARKER_SIZE / 2}px;
    width: ${MARKER_SIZE}px;
    height: ${MARKER_SIZE}px;
    background-color: #555;
    border-radius: 12px;
    box-shadow: inset -2px -2px 8px rgba(0,0,0,0.3), 2px 6px 3px rgba(0,0,0,0.2);
    cursor: pointer;
`;
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageArea = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
`;

export const BackgroundArea = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: url("topomap.jpeg");
    background-size: cover;
    filter: blur(8px);
    -webkit-filter: blur(8px);
`;

export const MainArea = styled.div`
    z-index: 100;
    width: calc(100% - 48px);
    margin: 48px 0;
    padding-top: 20px;
    max-width: 800px;
    min-height: calc(100vh - 116px);
    background-color: ${props => props.theme.color.base.main};
    border-radius: ${props => props.theme.border.radius.large};
    box-shadow: ${props => props.theme.shadow.large};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface DottedDividerProps {
    centeringMargin?:number
};
export const DottedDivider = styled.div<DottedDividerProps>`
    height: 1px;
    width: calc(100% - 60px);
    border-top: dotted 6px ${props => props.theme.color.primary.main};
    ${props => props.centeringMargin ? "margin-left: 30px;" : ""}
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.color.primary.dark};
`;

export const BannerArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.theme.color.error.main};
    padding: ${props => props.theme.padding.med} 0;
    margin-top: ${props => props.theme.margin.med};
    border-radius: ${props => props.theme.border.radius.small};
    color: ${props => props.theme.color.error.contrast};
    font-size: 1.2em;
    width: calc(100% - 60px);
    & > * {
        margin: 0 ${props => props.theme.padding.med};
    }
    & > svg {
        margin-left: ${props => props.theme.margin.med};
    }
`;

interface RowLayoutProps {
    margin?:string
};
export const RowLayout = styled.div<RowLayoutProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${props => props.margin ?? "0"};
`;


interface RatingAreaProps {
    size:number
};
export const RatingArea = styled.div<RatingAreaProps>`
    height: ${props => props.size}px;
    max-height: ${props => props.size}px;
    min-width: ${props => props.size * 5}px;
`;
interface RatingOverlayAreaProps {
    size:number,
    rating:number
};
export const RatingOverlayArea = styled.div<RatingOverlayAreaProps>`
    position: relative;
    overflow: hidden;
    top: -${props => props.size * 1.08}px;
    height: ${props => props.size}px;
    width: ${props => props.size * props.rating}px;
`;
export const RatingOverlayAreaInner = styled.div<RatingAreaProps>`
    height: ${props => props.size}px;
    width: ${props => props.size * 10}px;
`;

interface ButtonProps {
    width?: string
};
export const Button = styled.button<ButtonProps>`
    ${props => props.width ? `width: ${props.width};` : ""}
    margin: ${props => props.theme.margin.small} ${props => props.theme.margin.large};
    padding: ${props => props.theme.margin.small};
    border-radius: ${props => props.theme.border.radius.small};
    font-size: 1.3em;
    background-color: ${props => props.theme.color.primary.main};
    color: ${props => props.theme.color.primary.contrast};
    outline: none;
    border: none;
    text-transform: uppercase;
    box-shadow: 0 0 0 rgba(0,0,0,0);
    transform: translatey(0);
    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
    cursor: pointer;
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
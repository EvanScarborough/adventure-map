import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const PulseAnimation = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(107, 199, 182, 0.7); }
    100% { box-shadow: 0 0 0 16px rgba(107, 199, 182, 0); }
`;

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
    background-image: url("/topomap.jpeg");
    background-size: cover;
    filter: blur(8px);
    -webkit-filter: blur(8px);
`;

interface MainAreaProps {
    hardLimitHeight?: number
};
export const MainArea = styled.div<MainAreaProps>`
    z-index: 100;
    width: calc(100% - 48px);
    margin: 48px 0;
    padding-top: 20px;
    max-width: 800px;
    min-height: calc(100vh - 116px);
    ${props => props.hardLimitHeight ?
        `height: calc(100vh - 116px);
         max-height: calc(100vh - 116px);`
        : ""}
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
    margin?:string,
    space?:number
};
export const RowLayout = styled.div<RowLayoutProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${props => props.margin ?? "0"};
    ${props => props.space ? "justify-content: space-between;" : ""}
`;

interface ColumnLayoutProps {
    width?:string,
    margin?:string
};
export const ColumnLayout = styled.div<ColumnLayoutProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${props => props.margin ?? "0"};
    ${props => props.width ? `width: ${props.width};` : ""}
`;

interface CollectionLayoutProps {
    margin?:string,
    left?:number,
    spacing?:string
};
export const CollectionLayout = styled.div<CollectionLayoutProps>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.left ? 'flex-start' : 'center'};
    margin: ${props => props.margin ?? "0"};
    ${props => props.spacing ? `
        & > * {
            margin: ${props.spacing};
        }
    ` : ''}
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
    width?: string,
    cancel?: number,
    smallText?: number
};
export const Button = styled.button<ButtonProps>`
    ${props => props.width ? `width: ${props.width};` : ""}
    margin: ${props => props.theme.margin.small} ${props => props.theme.margin.large};
    padding: ${props => props.theme.margin.small};
    border-radius: ${props => props.theme.border.radius.small};
    font-size: ${props => props.smallText ? '1em' : '1.3em'};
    background-color: ${props => props.cancel ? props.theme.color.gray.dark : props.theme.color.primary.main};
    color: ${props => props.cancel ? "#fff" : props.theme.color.primary.contrast};
    outline: none;
    border: none;
    text-transform: ${props => props.smallText ? 'none' : 'uppercase'};
    box-shadow: 0 0 0 rgba(0,0,0,0);
    transform: translatey(0);
    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
    cursor: pointer;
    &:focus, &:hover {
        background-color: ${props => props.cancel ? props.theme.color.error.dark : props.theme.color.primary.dark};
        box-shadow: ${props => props.theme.shadow.small};
        transform: translatey(-2px);
        outline: none;
    }
    &:active {
        background-color: ${props => props.theme.color.primary.dark};
        box-shadow: 0 0 0 rgba(0,0,0,0);
        transform: translatey(0);
    }
    &:disabled, &[disabled] {
        background-color: #ccc;
        box-shadow: 0 0 0 rgba(0,0,0,0);
        transform: translatey(0);
        cursor: auto;
    }
`;
export const LinkButton = styled.a<ButtonProps>`
    text-align: center;
    ${props => props.width ? `width: ${props.width};` : ""}
    margin: ${props => props.theme.margin.small} ${props => props.theme.margin.large};
    padding: ${props => props.theme.margin.small};
    border-radius: ${props => props.theme.border.radius.small};
    font-size: ${props => props.smallText ? '1em' : '1.3em'};
    background-color: ${props => props.cancel ? props.theme.color.gray.dark : props.theme.color.primary.main};
    color: ${props => props.cancel ? "#fff" : props.theme.color.primary.contrast};
    outline: none;
    border: none;
    text-transform: ${props => props.smallText ? 'none' : 'uppercase'};
    box-shadow: 0 0 0 rgba(0,0,0,0);
    transform: translatey(0);
    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
    cursor: pointer;
    &:focus, &:hover {
        background-color: ${props => props.cancel ? props.theme.color.error.dark : props.theme.color.primary.dark};
        box-shadow: ${props => props.theme.shadow.small};
        transform: translatey(-2px);
        outline: none;
    }
    &:active {
        background-color: ${props => props.theme.color.primary.dark};
        box-shadow: 0 0 0 rgba(0,0,0,0);
        transform: translatey(0);
    }
    &:disabled, &[disabled] {
        background-color: #ccc;
        box-shadow: 0 0 0 rgba(0,0,0,0);
        transform: translatey(0);
        cursor: auto;
    }
    &:visited {
        color: ${props => props.cancel ? "#fff" : props.theme.color.primary.contrast};
    }
`;

interface SpacerProps {
    height?: string,
    width?: string,
    margin?: string,
};
export const Spacer = styled.div<SpacerProps>`
    ${props => props.height ? `height: ${props.height};` : ""}
    ${props => props.width ? `width: ${props.width};` : ""}
    ${props => props.margin ? `margin: ${props.margin};` : ""}
`;

export const PaginationArea = styled.div`
    overflow-x: hidden;
    width: 100%;
    height: 100%;
`;
interface PaginationAreaInnerProps {
    pageCount: number,
    pageOn: number
};
export const PaginationAreaInner = styled.div<PaginationAreaInnerProps>`
    position: relative;
    left: -${props => props.pageOn * 100}%;
    width: ${props => props.pageCount * 100}%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(${props => props.pageCount}, ${props => 100 / props.pageCount}%);
    grid-template-rows: 100%;
    transition: left 0.5s;
`;
interface PaginationPageProps {
    visible: number
};
export const PaginationPage = styled.div<PaginationPageProps>`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 0.5s;
`;

export const UserBadgeHolder = styled.div`
    display: inline-block;
`;
export const UserBadgeImage = styled.div`
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    border-radius: 16px;
    & > img, & > div {
        width: 32px;
        height: 32px;
        min-width: 32px;
        min-height: 32px;
        border-radius: 16px;
    }
`;
export const LargeUserBadgeImage = styled.div`
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    border-radius: 32px;
    & > img, & > div {
        width: 64px;
        height: 64px;
        min-width: 64px;
        min-height: 64px;
        border-radius: 32px;
        font-size: 30px;
    }
`;
export const HugeUserBadgeImage = styled.div`
    width: 256px;
    height: 256px;
    min-width: 256px;
    min-height: 256px;
    border-radius: 128px;
    & > img, & > div {
        width: 256px;
        height: 256px;
        min-width: 256px;
        min-height: 256px;
        border-radius: 128px;
        font-size: 120px;
    }
`;
export interface MissingImageProfileProps {
    color: string
};
export const MissingImageProfile = styled.div<MissingImageProfileProps>`
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const MissingImageProfileText = styled.h2`
    color: rgba(255,255,255,0.5);
    font-size: inherit;
    user-select: none;
`;

export const ChipContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${props => props.theme.padding.small} ${props => props.theme.padding.med};
    margin: 4px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 100px;
    &:hover > button {
        background-color: rgba(255,255,255,1);
    }
`;
export const ChipXButton = styled.button`
    background-color: rgba(255,255,255,0);
    outline: none;
    border: none;
    width: 20px;
    height: 20px;
    padding: 4px 0 0 0;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
`;

interface ImageUploadAreaProps {
    dragOver: number
};
export const ImageUploadArea = styled.div<ImageUploadAreaProps>`
    width: 100%;
    border: dashed 2px ${props => props.dragOver ? props.theme.color.primary.light : "#aaa"};
    border-radius: 8px;
    background-color: ${props => props.dragOver ? props.theme.color.primary.wash : "white"};
    text-align: center;
    color: ${props => props.dragOver ? props.theme.color.primary.light : "#aaa"};
    padding: 24px 0;
`;
export const ImageUploadInput = styled.input``;
export const ImagePreviewHolder = styled.button`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: solid 1px #ccc;
    border-radius: ${props => props.theme.border.radius.small};
    background: none;
    overflow: hidden;
    padding: 0;
    margin: 8px;
    cursor: pointer;
`;
export const ImagePreview = styled.img`
    width: 100%;
`;

export const ProfileButtonHolder = styled.button`
    position: fixed;
    z-index: 1000;
    top: 10px;
    right: 10px;
    width: 80px;
    height: 80px;
    max-height: 80px;
    padding: ${props => props.theme.margin.small};
    border-radius: 50%;
    background-color: ${props => props.theme.color.base.main};
    outline: none;
    border: none;
    box-shadow: 0 0 12px rgba(0,0,0,0.5);
    cursor: pointer;
`;
export const NotificationBubble = styled.div`
    position: absolute;
    bottom: -2px;
    left: -2px;
    padding: 4px;
    height: 16px;
    min-width: 16px;
    border-radius: 16px;
    border: solid ${props => props.theme.color.primary.contrast} 3px;
    background-color: ${props => props.theme.color.primary.main};
    color: ${props => props.theme.color.primary.contrast};
    box-shadow: 0 0 0 0 rgba(107, 199, 182, 1);
    animation-name: ${PulseAnimation};
    animation-duration: 6s;
    animation-iteration-count: infinite;
`;
export const MapButtonHolder = styled.button`
    position: fixed;
    z-index: 1000;
    top: 18px;
    left: 18px;
    width: 64px;
    height: 64px;
    padding: ${props => props.theme.margin.small};
    border-radius: 50%;
    background-color: ${props => props.theme.color.base.main};
    outline: none;
    border: none;
    box-shadow: 0 0 12px rgba(0,0,0,0.5);
    cursor: pointer;
`;

interface ScreenBackgroundAreaProps {
    show: number
};
export const ScreenBackgroundArea = styled.div<ScreenBackgroundAreaProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,${props => props.show ? '0.5' : '0'});
    backdrop-filter: blur(${props => props.show ? '8px' : '0px'});
    transition: background-color 0.3s, backdrop-filter 0.3s;
    pointer-events: ${props => props.show ? 'auto' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
`;
interface ModalAreaProps {
    show: number,
    width?: string,
    height?: string
};
export const ModalArea = styled.div<ModalAreaProps>`
    background-color: ${props => props.theme.color.base.main};
    min-width: 100px;
    min-height: 100px;
    ${props => props.width ? `width: ${props.width};` : ''}
    ${props => props.height ? `height: ${props.height};` : ''}
    max-width: calc(100vw - 120px);
    max-height: calc(100vh - 120px);
    border-radius: ${props => props.theme.border.radius.large};
    padding: ${props => props.theme.padding.medlarge};
    transform: scale(${props => props.show ? '1' : '0'},${props => props.show ? '1' : '0'});
    transition: transform 0.3s;
    transition-timing-function: ${props => props.show ? props.theme.transition.smallbounce : 'ease'};
    pointer-events: ${props => props.show ? 'auto' : 'none'};
    overflow: scroll;
`;

export const BoxButton = styled.button`
    border: none;
    outline: none;
    border-radius: ${props => props.theme.border.radius.med};
    background-color: ${props => props.theme.color.base.main};
    width: 50px;
    height: 50px;
    box-shadow: ${props => props.theme.shadow.small};
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: transform 0.5s ease, box-shadow 0.5s;
    transition-timing-function: ${props => props.theme.transition.smallbounce};
    cursor: pointer;
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 8px rgba(0,0,0,0.2);
    }
`;
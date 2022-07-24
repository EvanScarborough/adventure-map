import styled from "styled-components";

export const UserHeroArea = styled.div`
    width: 100%;
    height: 200px;
    background-color: #eee;
    margin-bottom: -128px;
`;

export const UploadImageButton = styled.button`
    width: 64px;
    height: 64px;
    min-height: 64px;
    min-width: 64px;
    border-radius: 32px;
    outline: none;
    border: none;
    color: black;
    background-color: white;
    margin-top: -64px;
    margin-left: 172px;
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

export const UserBodyArea = styled.div`
    margin: auto;
    width: calc(100% - 48px);
    max-width: 600px;
    display: flex;
    flex-direction: column;
`;

export const NotificationBadgeArea = styled.div`
    width: 100%;
    margin: 4px 0;
    padding: 8px;
    outline: none;
    border: none;
    color: ${props => props.theme.color.base.contrast};
    border-radius: ${props => props.theme.border.radius.med};
    background-color: ${props => props.theme.color.base.main};
    box-shadow: ${props => props.theme.shadow.small};
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NotificationButton = styled.a`
    margin-left: auto;
    text-align: center;
    min-width: 120px;
    padding: ${props => props.theme.margin.small};
    border-radius: ${props => props.theme.border.radius.small};
    font-size: 1em;
    background-color: #aaa;
    color: ${props => props.theme.color.primary.contrast};
    outline: none;
    border: none;
    box-shadow: 0 0 0 rgba(0,0,0,0);
    transform: translatey(0);
    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s, color 0.2s;
    cursor: pointer;
    &:focus, &:hover {
        background-color: ${props => props.theme.color.primary.dark};
        color: ${props => props.theme.color.primary.contrast};
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
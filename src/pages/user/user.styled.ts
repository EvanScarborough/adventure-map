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
    box-shadow: ${props => props.theme.shadow.small};
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
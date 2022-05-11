import styled from "styled-components";

export const LocationHeroArea = styled.div`
    width: 100%;
    height: 300px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LocationTitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.color.base.main};
    border-radius: ${props => props.theme.border.radius.med};
    padding: ${props => props.theme.padding.med} ${props => props.theme.padding.large};
    padding-bottom: ${props => props.theme.padding.medlarge};
    max-width: 50vw;
    & > div:first-of-type {
        margin-top: -32px;
    }
`;

export const LocationBodyArea = styled.div`
    margin: auto;
    width: 100%;
    max-width: 600px;
    background-color: ${props => props.theme.color.base.main};
    display: flex;
    flex-direction: column;
`;
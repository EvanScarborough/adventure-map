import styled from "styled-components";

interface LocationHeroAreaProps {
    imageUrl: string|null
};
export const LocationHeroArea = styled.div<LocationHeroAreaProps>`
    width: 100%;
    height: 300px;
    background-color: #eee;
    ${props => props.imageUrl ? `
        background-image: url(${props.imageUrl});
    ` : ``}
    background-repeat: no-repeat;
    background-size: cover;
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
    width: calc(100% - 48px);
    max-width: 600px;
    background-color: ${props => props.theme.color.base.main};
    display: flex;
    flex-direction: column;
`;

export const AdventureCardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    margin: 4px 16px;
    padding: 16px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
`;

export const CenterAligner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const MemberCommentArea = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const MemberCommentDescriptionArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 16px;
    margin-top: 8px;
`;

interface AdventureImageContainerProps {
    imageUrl: string
};
export const AdventureImageContainer = styled.div<AdventureImageContainerProps>`
    width: 80px;
    height: 80px;
    border-radius: ${props => props.theme.border.radius.small};
    background-color: #ccc;
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    margin: ${props => props.theme.margin.small};
    cursor: pointer;
`;
export const ModalImage = styled.img`
    width: 100%;
`;
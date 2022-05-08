import styled from "styled-components";

export const LocationInputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 120px);
    margin-top: -${props => props.theme.margin.med};
`;

export const SuggestionArea = styled.div`
    position: absolute;
    z-index: 100;
    width: calc(100% - 120px);
    max-width: 680px;
    background-color: ${props => props.theme.color.base.main};
    padding: ${props => props.theme.padding.small};
    border-radius: ${props => props.theme.border.radius.med};
    box-shadow: ${props => props.theme.shadow.small};
`;

export const Suggestion = styled.div`
    background-color: ${props => props.theme.color.base.main};
    color: ${props => props.theme.color.base.overlay};
    padding: ${props => props.theme.padding.small};
    border-radius: ${props => props.theme.border.radius.med};
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.color.primary.wash};
    }
`;

export const ConfirmMapHolder = styled.div`
    width: calc(100% - 60px);
    height: 400px;
`;
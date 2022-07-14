import styled from "styled-components";

export const SearchResultsPopupContainer = styled.div`
    position: relative;
    width: calc(100% - 100px);
    height: 0px;
`;
export const SearchResultsPopupArea = styled.div`
    position: absolute;
    margin-top: -16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme.color.base.main};
    box-shadow: ${props => props.theme.shadow.small};
    border-radius: ${props => props.theme.border.radius.med};
    padding: ${props => props.theme.padding.small};
`;
export const SearchResultSuggestion = styled.button`
    all: unset;
    background-color: ${props => props.theme.color.base.main};
    border-radius: ${props => props.theme.border.radius.med};
    width: 100%;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.color.primary.wash};
    }
    & > * {
        margin: ${props => props.theme.padding.small};
    }
`;
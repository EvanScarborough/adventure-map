import styled from "styled-components";

export const FancyHeader = styled.h1`
    font-size: 4em;
    font-family: ${props => props.theme.font.standout};
    color: ${props => props.theme.color.primary.dark};
`;
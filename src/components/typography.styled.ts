import styled from "styled-components";

type TypographyProps = {
    center?: number
};


export const FancyHeader = styled.h1<TypographyProps>`
    font-size: 4em;
    font-family: ${props => props.theme.font.standout};
    color: ${props => props.theme.color.primary.main};
    margin: 10px 0;
    text-align: ${props => props.center ? "center" : "left"};
`;

export const Body = styled.p<TypographyProps>`
    color: ${props => props.theme.color.base.overlay};
    font-size: 1em;
    text-align: ${props => props.center ? "center" : "left"};
`;

export const SmallNote = styled.p<TypographyProps>`
    color: ${props => props.theme.color.primary.light};
    font-size: 1em;
    text-align: ${props => props.center ? "center" : "left"};
`;
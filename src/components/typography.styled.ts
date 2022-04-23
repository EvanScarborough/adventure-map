import styled from "styled-components";

type TypographyProps = {
    center?: number,
    inheritColor?: number,
    margin?: string,
    padding?: string
};


export const FancyHeader = styled.h1<TypographyProps>`
    font-size: 4em;
    font-family: ${props => props.theme.font.standout};
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.primary.main};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
    text-align: ${props => props.center ? "center" : "left"};
`;

export const SmallTitle = styled.h2<TypographyProps>`
    font-size: 1em;
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.base.overlay};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
    text-align: ${props => props.center ? "center" : "left"};
`;

export const Body = styled.p<TypographyProps>`
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.base.overlay};
    font-size: 1em;
    text-align: ${props => props.center ? "center" : "left"};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
`;

export const SmallNote = styled.p<TypographyProps>`
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.gray.main};
    font-size: 1em;
    text-align: ${props => props.center ? "center" : "left"};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
`;

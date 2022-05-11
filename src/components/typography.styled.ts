import styled from "styled-components";

type TypographyProps = {
    center?: number,
    inheritColor?: number,
    margin?: string,
    padding?: string,
    fillWidth?: number
};


export const FancyHeader = styled.h1<TypographyProps>`
    font-size: 4em;
    font-family: ${props => props.theme.font.standout};
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.primary.main};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
    text-align: ${props => props.center ? "center" : "left"};
    ${props => props.fillWidth ? "width: 100%;" : ""}
`;

export const Title = styled.h1<TypographyProps>`
    font-size: 1.8em;
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.base.overlay};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
    text-align: ${props => props.center ? "center" : "left"};
    ${props => props.fillWidth ? "width: 100%;" : ""}
`;

export const SmallTitle = styled.h2<TypographyProps>`
    font-size: 1em;
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.base.overlay};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
    text-align: ${props => props.center ? "center" : "left"};
    ${props => props.fillWidth ? "width: 100%;" : ""}
`;

export const SectionHeader = styled.h2<TypographyProps>`
    font-size: 1.2em;
    font-weight: 500;
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.base.overlay};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
    text-align: ${props => props.center ? "center" : "left"};
    ${props => props.fillWidth ? "width: 100%;" : ""}
`;

export const Body = styled.p<TypographyProps>`
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.base.overlay};
    font-size: 1em;
    text-align: ${props => props.center ? "center" : "left"};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
    ${props => props.fillWidth ? "width: 100%;" : ""}
`;

export const SmallNote = styled.p<TypographyProps>`
    color: ${props => props.inheritColor ? "inherit" : props.theme.color.gray.main};
    font-size: 1em;
    text-align: ${props => props.center ? "center" : "left"};
    margin: ${props => props.margin ?? "10px 0"};
    padding: ${props => props.padding ?? "0"};
    ${props => props.fillWidth ? "width: 100%;" : ""}
`;

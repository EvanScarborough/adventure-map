import styled from "styled-components";
import { Link } from "react-router-dom";

interface DottedDividerProps {
    centeringMargin?:number
};
export const DottedDivider = styled.div<DottedDividerProps>`
    height: 1px;
    width: calc(100% - 60px);
    border-top: dotted 6px ${props => props.theme.color.primary.main};
    ${props => props.centeringMargin ? "margin-left: 30px;" : ""}
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.color.primary.dark};
`;

export const BannerArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.theme.color.error.main};
    padding: ${props => props.theme.padding.med} 0;
    margin-top: ${props => props.theme.margin.med};
    border-radius: ${props => props.theme.border.radius.small};
    color: ${props => props.theme.color.error.contrast};
    font-size: 1.2em;
    width: calc(100% - 60px);
    & > * {
        margin: 0 ${props => props.theme.padding.med};
    }
    & > svg {
        margin-left: ${props => props.theme.margin.med};
    }
`;

export const RowLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
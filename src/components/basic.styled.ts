import styled from "styled-components";
import { Link } from "react-router-dom";

export const DottedDivider = styled.div`
    height: 1px;
    width: calc(100% - 60px);
    border-top: dotted 6px ${props => props.theme.color.primary.main};
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.color.primary.dark};
`;
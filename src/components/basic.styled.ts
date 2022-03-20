import styled from "styled-components";

export const DottedDivider = styled.div`
    height: 1px;
    width: calc(100% - 60px);
    border-top: dotted 6px ${props => props.theme.color.primary.main};
`;
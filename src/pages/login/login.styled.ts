import styled from "styled-components";

export const PageArea = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackgroundArea = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: url("topomap.jpeg");
    background-size: cover;
    filter: blur(8px);
    -webkit-filter: blur(8px);
`;

export const LoginArea = styled.div`
    z-index: 100;
    width: calc(100% - 48px);
    margin: 48px 0;
    max-width: 400px;
    min-height: 400px;
    background-color: ${props => props.theme.color.base.main};
    border: dashed 6px ${props => props.theme.color.base.main};
    border-radius: ${props => props.theme.border.radius.large};
    box-shadow: ${props => props.theme.shadow.large};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
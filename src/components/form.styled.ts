import styled from "styled-components";


interface FormProps {
    maxWidth?:number,
    margin?:string
};
export const Form = styled.form<FormProps>`
    display: flex;
    flex-direction: column;
    width: calc(100% - 60px);
    ${props => props.maxWidth ? `max-width: ${props.maxWidth}px;` : ""}
    ${props => props.margin ? `margin: ${props.margin};` : ""}
    align-items: stretch;
    margin-top: ${props => props.theme.margin.med};
`;

interface InputProps {
    limitWidth?:number;
};

export const Label = styled.label`

`;

export const TextInput = styled.input<InputProps>`
    ${props => props.limitWidth ?
        "width: calc(100% - 120px);" : ""}
    padding: ${props => props.theme.margin.small};
    margin: ${props => props.theme.margin.small} 0 ${props => props.theme.margin.med} 0;
    border: solid ${props => props.theme.border.width} ${props => props.theme.color.primary.main};
    border-radius: ${props => props.theme.border.radius.small};
    font-size: 1.3em;
    &:focus {
        background-color: ${props => props.theme.color.primary.wash};
        outline: none;
    }
`;

export const TextArea = styled.textarea<InputProps>`
    ${props => props.limitWidth ?
        "width: calc(100% - 120px);" : ""}
    padding: ${props => props.theme.margin.small};
    margin: ${props => props.theme.margin.small} 0 ${props => props.theme.margin.med} 0;
    border: solid ${props => props.theme.border.width} ${props => props.theme.color.primary.main};
    border-radius: ${props => props.theme.border.radius.small};
    font-size: 1.3em;
    &:focus {
        background-color: ${props => props.theme.color.primary.wash};
        outline: none;
    }
`;

interface ButtonInputProps {
    width?:string
};
export const ButtonInput = styled.input<ButtonInputProps>`
    ${props => props.width ? `width: ${props.width};` : ""}
    margin: ${props => props.theme.margin.small} ${props => props.theme.margin.large};
    padding: ${props => props.theme.margin.small};
    border-radius: ${props => props.theme.border.radius.small};
    font-size: 1.3em;
    font-weight: normal;
    background-color: ${props => props.theme.color.primary.main};
    color: ${props => props.theme.color.primary.contrast};
    outline: none;
    border: none;
    text-transform: uppercase;
    box-shadow: 0 0 0 rgba(0,0,0,0);
    transform: translatey(0);
    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
    cursor: pointer;
    &:focus, &:hover {
        background-color: ${props => props.theme.color.primary.dark};
        box-shadow: ${props => props.theme.shadow.small};
        transform: translatey(-2px);
        outline: none;
    }
    &:active {
        background-color: ${props => props.theme.color.primary.dark};
        box-shadow: 0 0 0 rgba(0,0,0,0);
        transform: translatey(0);
    }
`;

export const Select = styled.select<ButtonInputProps>`
    ${props => props.width ? `width: ${props.width};` : ""}
    color: ${props => props.theme.color.base.contrast};
    padding: ${props => props.theme.margin.small};
    margin: ${props => props.theme.margin.med} 0 ${props => props.theme.margin.small} 0;
    border: solid ${props => props.theme.border.width} ${props => props.theme.color.primary.main};
    border-radius: ${props => props.theme.border.radius.small};
    font-size: 1.3em;
    &:focus {
        background-color: ${props => props.theme.color.primary.wash};
        outline: none;
    }
`;
export const SelectOption = styled.option`

`;
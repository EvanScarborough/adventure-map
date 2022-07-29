import { ReactChild } from "react";
import { FiX } from "react-icons/fi";
import { BoxButton, ModalArea, RowLayout, ScreenBackgroundArea } from "./basic.styled";
import { SectionHeader } from "./typography.styled";

interface ModalProps {
    show: boolean,
    title?: string,
    width?: string,
    height?: string,
    onClose:() => void,
    children: ReactChild | ReactChild[]
};
const Modal = ({ show, title, width, height, onClose, children }: ModalProps) => {
    return (
        <ScreenBackgroundArea show={show ? 1 : 0} onClick={() => onClose()}>
            <ModalArea show={show ? 1 : 0} width={width} height={height} onClick={e => e.stopPropagation()}>
                <RowLayout space={1} margin="0 0 16px 0">
                    <SectionHeader margin="0 16px 0 0">{title}</SectionHeader>
                    <BoxButton onClick={() => onClose()}><FiX size="32px" color="black"/></BoxButton>
                </RowLayout>
                {children}
            </ModalArea>
        </ScreenBackgroundArea>
    );
};

export default Modal;
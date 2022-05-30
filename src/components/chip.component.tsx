import { FiX } from "react-icons/fi";
import { ChipContainer, ChipXButton } from "./basic.styled";


interface ChipProps {
    children: any,
    onPressX?: () => void
};
const Chip = ({ children, onPressX }: ChipProps) => {
    return (
        <ChipContainer>
            {children}
            { onPressX && <ChipXButton onClick={e => onPressX()}><FiX/></ChipXButton>}
        </ChipContainer>
    );
};

export default Chip;
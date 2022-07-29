import { FiMap } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { MapButtonHolder } from "./basic.styled";

const BackToMapButton = () => {
    const navigate = useNavigate();
    return (
        <MapButtonHolder
            onClick={() => navigate('/')}>
            <FiMap size="24px" color="black"/>
        </MapButtonHolder>
    );
};

export default BackToMapButton;
import { BannerArea } from "./basic.styled";
import { FiFrown } from "react-icons/fi";
import { Body } from "./typography.styled";

export type BannerType = "info"|"warn"|"error";
interface BannerProps {
    children:string,
    type:BannerType
};
const Banner = ({ children }:BannerProps) => {
    return(
        <BannerArea>
            <FiFrown size="32px" />
            <Body inheritColor={1}>{children}</Body>
        </BannerArea>
    );
};

export default Banner;
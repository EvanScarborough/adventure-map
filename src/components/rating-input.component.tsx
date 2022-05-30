import { useState } from "react";
import { RatingArea } from "./basic.styled";
import Icon, { IconName } from "./icon.component";

interface RatingInputProps {
    rating: number,
    icon?: IconName,
    color?: string,
    onChange(rating: number): void
};
const RatingInput = ({ rating, icon, color, onChange }: RatingInputProps) => {
    const [hoverIndex, setHoverIndex] = useState<number|null>(null);
    const displayRating = hoverIndex ? hoverIndex : rating;
    const iconSize = 32;
    return (
        <RatingArea size={iconSize} onClick={() => onChange(hoverIndex as number)}>
            { [1,2,3,4,5].map(r => <Icon
                key={r}
                index={r}
                type={icon ?? "Star"}
                color={displayRating >= r ? (color ?? "#57827a") : "#ddd"}
                size={iconSize}
                hover={hoverIndex===r}
                setOver={setHoverIndex}/>
            )}
        </RatingArea>
    );
};

export default RatingInput;
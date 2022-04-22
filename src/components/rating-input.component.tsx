import { useState } from "react";
import { RatingArea } from "./basic.styled";
import Icon from "./icon.component";

interface RatingInputProps {
    rating: number
};
const RatingInput = ({ rating }: RatingInputProps) => {
    const [hoverIndex, setHoverIndex] = useState<number|null>(null);
    const displayRating = hoverIndex ? hoverIndex : rating;
    const iconSize = 32;
    return (
        <RatingArea size={iconSize}>
            { [1,2,3,4,5].map(r => <Icon
                key={r}
                index={r}
                type={displayRating >= r ? "Star" : "Empty"}
                color={displayRating >= r ? "orange" : "gray"}
                size={iconSize}
                hover={hoverIndex===r}
                setOver={setHoverIndex}/>
            )}
        </RatingArea>
    );
};

export default RatingInput;
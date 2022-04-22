import { useState } from "react";
import { RatingArea, RatingOverlayArea, RatingOverlayAreaInner } from "./basic.styled";
import Icon from "./icon.component";

interface RatingProps {
    rating: number
};
const Rating = ({ rating }: RatingProps) => {
    const iconSize = 32;
    return (
        <RatingArea size={iconSize}>
            { [1,2,3,4,5].map(r => <Icon
                key={r}
                type="Empty"
                color="gray"
                size={iconSize}/>
            )}
            <RatingOverlayArea size={iconSize} rating={rating}>
                <RatingOverlayAreaInner size={iconSize}>
                    { [1,2,3,4,5].map(r => <Icon
                        key={r}
                        type="Star"
                        color="orange"
                        size={iconSize}/>
                    )}
                </RatingOverlayAreaInner>
            </RatingOverlayArea>
        </RatingArea>
    );
};

export default Rating;
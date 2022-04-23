import { useState } from "react";
import { RatingArea, RatingOverlayArea, RatingOverlayAreaInner } from "./basic.styled";
import Icon, { IconName } from "./icon.component";

interface RatingProps {
    rating: number,
    icon?: IconName,
    color?: string
};
const Rating = ({ rating, icon, color }: RatingProps) => {
    const iconSize = 24;
    return (
        <RatingArea size={iconSize}>
            { [1,2,3,4,5].map(r => <Icon
                key={r}
                type="Empty"
                color="#ccc"
                size={iconSize}/>
            )}
            <RatingOverlayArea size={iconSize} rating={rating}>
                <RatingOverlayAreaInner size={iconSize}>
                    { [1,2,3,4,5].map(r => <Icon
                        key={r}
                        type={icon ?? "Star"}
                        color={color ?? "#57827a"}
                        size={iconSize}/>
                    )}
                </RatingOverlayAreaInner>
            </RatingOverlayArea>
        </RatingArea>
    );
};

export default Rating;
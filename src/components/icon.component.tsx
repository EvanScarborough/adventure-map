import React, { useState } from 'react';
import { ReactElement } from 'react';
import { ReactComponent as Empty } from '../icons/empty.svg';
import { ReactComponent as Star } from '../icons/star.svg';

export type IconName = "Empty"
    | "Star";

const icons:Record<IconName,React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>> = {
    "Empty":Empty,
    "Star":Star
};

interface IconProps {
    type: IconName,
    color: string,
    size: number,
    index?: number,
    setOver?:(i:number|null)=>void
    hover?: boolean
};
const Icon = ({ type, color, size, index, setOver, hover }: IconProps) => {
    const sizepx = `${size}px`;
    const props = {
        color:color,
        width:sizepx,
        height:sizepx,
        onMouseEnter:()=>{if(setOver)setOver(index??null)},
        onMouseLeave:()=>{if(setOver)setOver(null)},
        style:{
            transform:`scale(${hover ? "1.2" : "1"})`,
            transition:"transform 0.1s",
            cursor:setOver?"pointer":"auto"
        }
    };
    return React.createElement(icons[type], props);
};

export default Icon;
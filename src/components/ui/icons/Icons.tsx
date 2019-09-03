import React, { FunctionComponent, ImgHTMLAttributes } from 'react';
import './Icons.scss';
import { appendClassName } from '../../../utils';

import building from '../../../icons/building.svg';
import selectArrows from '../../../icons/selectArrows.svg';
import downArrow from '../../../icons/down-arrow.svg';
import accordionArrow from '../../../icons/accordionArrow.svg';

// TODO: is string type necessary?
export type TIconType = 'building' | 'selectArrows' | 'downArrow' | 'accordionArrow' | string;

interface IIcons {
    [key: string]: string;
}

const ICONS: IIcons = {
    building,
    selectArrows,
    downArrow,
    accordionArrow,
};

interface IIconProps<T> extends ImgHTMLAttributes<T> {
    icon: TIconType;
}

export const Icon: FunctionComponent<IIconProps<HTMLImageElement>> = ({ icon, className, ...props }) => {
    if (!ICONS[icon]) {
        console.error(`Icon ${icon} does not exist`);

        return null;
    }

    const imgClassName = appendClassName(`icon_${icon}`, className);

    return <img src={ICONS[icon]} alt={icon} className={imgClassName} {...props} />;
};

export const EventIcon: FunctionComponent<IIconProps<HTMLElement>> = ({ icon, className, ...props }) => {
    if (!ICONS[icon]) {
        console.error(`Icon ${icon} does not exist`);

        return null;
    }

    const figureClassName = appendClassName(`b-event-icon flex justify-center align-center icon_${icon}`, className);

    return (
        <figure className={figureClassName} {...props}>
            <img src={ICONS[icon]} alt={icon} />
        </figure>
    );
};

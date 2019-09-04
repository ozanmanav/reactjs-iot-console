import React, { FunctionComponent, ImgHTMLAttributes } from 'react';
import './Icons.scss';
import { appendClassName } from '../../../utils';

import building from '../../../icons/building.svg';
import selectArrows from '../../../icons/selectArrows.svg';
import downArrow from '../../../icons/down-arrow.svg';
import accordionArrow from '../../../icons/accordionArrow.svg';
import narrowIcon from '../../../icons/narrow-icon.svg';
import narrowIconDeactive from '../../../icons/narrow-icon-deactive.svg';

// TODO: is string type necessary?
export type TIconType = 'building' | 'selectArrows' | 'downArrow' | 'accordionArrow' | 'narrowIcon' | 'narrowIconDeactive' | string;

interface IIcons {
    [key: string]: string;
}

const ICONS: IIcons = {
    building,
    selectArrows,
    downArrow,
    accordionArrow,
    narrowIcon,
    narrowIconDeactive,
};

interface IIconProps<T> extends ImgHTMLAttributes<T> {
    icon: TIconType;
}

export const Icon: FunctionComponent<IIconProps<HTMLImageElement>> = ({ icon, className, ...props }) => {
    console.log(icon);
    if (!ICONS[icon]) {
        console.error(`Icon ${icon} does not exist`);

        return null;
    }

    const imgClassName = appendClassName(`icon_${icon}`, className);

    return <img src={ICONS[icon]} alt={icon} className={imgClassName} {...props} />;
};

export const NarrowIcon: FunctionComponent<IIconProps<HTMLImageElement>> = ({ icon, className, ...props }) => {
    if (!ICONS[icon]) {
        console.error(`Icon ${icon} does not exist`);

        return null;
    }

    const imgClassName = appendClassName(`icon_${icon}`, className);

    return <img src={ICONS[icon]} alt={icon} className={imgClassName} {...props} />;
};

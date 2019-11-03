import React, { FunctionComponent, ImgHTMLAttributes } from 'react';
import './Icons.scss';
import { appendClassName } from '../../../utils';

import building from '../../../icons/building.svg';
import selectArrows from '../../../icons/selectArrows.svg';
import upArrow from '../../../icons/up-arrow.svg';
import downArrow from '../../../icons/down-arrow.svg';
import accordionArrow from '../../../icons/accordionArrow.svg';
import blackArrow from '../../../icons/blackArrow.svg';
import narrowIcon from '../../../icons/narrow-icon.svg';
import narrowIconDeactive from '../../../icons/narrow-icon-deactive.svg';
import history from '../../../icons/history.svg';
import trash from '../../../icons/trash.svg';
import copy from '../../../icons/copy.svg';
import logout from '../../../icons/logout.svg';
import location from '../../../icons/location-icon.svg';
import avatar from '../../../icons/avatar.svg';
import add from '../../../icons/plus-feynlab.png';
import alarm from '../../../icons/alarm.svg';
import calendar from '../../../icons/calendar.svg';
import edit from '../../../icons/edit-icon.svg';
import download from '../../../icons/download-icon.svg';
import save from '../../../icons/save-icon.svg';
import cancel from '../../../icons/cancel-icon.svg';
import checkmark from '../../../icons/checkmark.svg';

// TODO: is string type necessary?
export type TIconType =
  | 'building'
  | 'selectArrows'
  | 'downArrow'
  | 'upArrow'
  | 'accordionArrow'
  | 'narrowIcon'
  | 'narrowIconDeactive'
  | 'history'
  | 'trash'
  | 'copy'
  | 'logout'
  | 'location'
  | 'avatar'
  | 'addDashboard'
  | 'alarm'
  | 'calendar'
  | 'edit'
  | 'download'
  | 'save'
  | 'cancel'
  | 'blackArrow'
  | 'checkmark'
  | string;

interface IIcons {
  [key: string]: string;
}

const ICONS: IIcons = {
  building,
  selectArrows,
  downArrow,
  upArrow,
  accordionArrow,
  blackArrow,
  narrowIcon,
  narrowIconDeactive,
  history,
  trash,
  copy,
  logout,
  location,
  avatar,
  add,
  alarm,
  calendar,
  edit,
  download,
  save,
  cancel,
  checkmark
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

export const NarrowIcon: FunctionComponent<IIconProps<HTMLImageElement>> = ({ icon, className, ...props }) => {
  if (!ICONS[icon]) {
    console.error(`Icon ${icon} does not exist`);

    return null;
  }

  const imgClassName = appendClassName(`icon_${icon}`, className);

  return <img src={ICONS[icon]} alt={icon} className={imgClassName} {...props} />;
};

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface ISidebarHeaderProps {
    image?: string;
    deactiveImage?: string;
    text: string;
    active: boolean;
}

const SidebarHeader: FunctionComponent<ISidebarHeaderProps> = ({ active, image, deactiveImage, text }) => (
    <div className="b-sidebar-header">
        <img src={active ? image : deactiveImage} alt="logo" className="b-sidebar-header__image" />
        <span className={classNames('b-sidebar-header', { active })}>{text} </span>
    </div>
);

export default SidebarHeader;

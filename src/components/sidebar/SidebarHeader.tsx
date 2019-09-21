import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface ISidebarHeaderProps {
    image?: string;
    deactiveImage?: string;
    onlyText?: boolean;
    text: string;
    active: boolean;
}

const SidebarHeader: FunctionComponent<ISidebarHeaderProps> = ({
    active,
    image,
    deactiveImage,
    text,
    onlyText = false
}) => (
    <div className="b-sidebar-header">
        {!onlyText && <img src={active ? image : deactiveImage} alt="logo" className="b-sidebar-header__image" />}
        <span className={classNames('b-sidebar-header', { active }, { onlyText })}>{text} </span>
    </div>
);

export default SidebarHeader;

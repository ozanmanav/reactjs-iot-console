import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface ISidebarHeaderProps {
    image?: string;
    text: string;
    activeItem?: string;
}

const SidebarHeader: FunctionComponent<ISidebarHeaderProps> = (props) => (
    <div className="b-sidebar-header">
        <img src={props.image} alt="logo" className="b-sidebar-header__image" />
        <span
            className={classNames({
                ['active']: props.activeItem === `/${props.text.toLowerCase()}`,
            })}
        >
            {props.text}{' '}
        </span>
    </div>
);

export default SidebarHeader;

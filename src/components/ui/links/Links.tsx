import React, { FunctionComponent, MouseEvent } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import './Links.scss';
import { appendClassName } from '../../../utils';

interface ILinkProps extends NavLinkProps {
    navLink?: boolean;
    disabled?: boolean;
}

export const CustomNavLink: FunctionComponent<ILinkProps> = ({ children, className, navLink, disabled, ...props }) => {
    const activeClassName = navLink ? '_active' : '';
    let linkClassName = appendClassName('link _font-bold', className);

    if (disabled) {
        linkClassName += ' _disabled';
    }

    function onClick(e: MouseEvent) {
        if (disabled) {
            e.preventDefault();
        }
    }

    return (
        <NavLink {...props} className={linkClassName} onClick={onClick} activeClassName={activeClassName}>
            {children}
        </NavLink>
    );
};

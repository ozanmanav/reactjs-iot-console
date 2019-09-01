import React, { FunctionComponent, HTMLAttributes } from 'react';
import './Header.scss';
import { Logo, CustomNavLink } from '../ui';
import classNames from 'classnames';
import { NavLinkProps, NavLink } from 'react-router-dom';

export const HeaderLogo: FunctionComponent<HTMLAttributes<HTMLAnchorElement> & NavLinkProps> = ({ className, to }) => {
    return (
        <CustomNavLink to={to} className={classNames('b-header__link flex', className)}>
            <Logo className="b-header__logo" />
        </CustomNavLink>
    );
};

export const AuthNav: FunctionComponent = () => {
    return (
        <nav className="b-header-user">
            <NavLink to={'/signup'}>
                <div className="b-header-user__signup">
                    <div className="b-Fheader-user__signup-text">Sign Up</div>
                </div>
            </NavLink>
            <NavLink to={'/login'}>
                <div className="b-header-user__login">
                    <div className="b-Fheader-user__login-text">Log In</div>
                </div>
            </NavLink>
        </nav>
    );
};

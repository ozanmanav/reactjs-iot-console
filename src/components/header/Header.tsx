import React, { FunctionComponent, HTMLAttributes } from 'react';
import './Header.scss';
import { Logo, CustomNavLink, useModal } from '../ui';
import classNames from 'classnames';
import { NavLinkProps, NavLink } from 'react-router-dom';
import { AuthState } from '../../store/auth/types';
import { userLogout } from '../../store/auth/actions';
import { AppState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmModal } from '../modals';
import { UserNav } from './UserNav';
import get from 'lodash.get';

export const HeaderLogo: FunctionComponent<HTMLAttributes<HTMLAnchorElement> & NavLinkProps> = ({ className, to }) => {
  return (
    <CustomNavLink to={to} className={classNames('b-header__link flex', className)}>
      <Logo className="b-header__link-logo" />
      <div className="b-header__link-title">Qubitro </div>
    </CustomNavLink>
  );
};

export const AuthNav: FunctionComponent = () => {
  return (
    <nav className="b-header">
      <NavLink to={'/signup'}>
        <div className="b-header__signup">
          <div className="b-header__signup-text">Sign Up</div>
        </div>
      </NavLink>
      <NavLink to={'/login'}>
        <div className="b-header__login">
          <div className="b-header__login-text">Log In</div>
        </div>
      </NavLink>
    </nav>
  );
};

interface LandingHeaderBaseProps {
  auth?: AuthState;
}

export const LandingHeader: FunctionComponent<LandingHeaderBaseProps> = () => {
  const { open: openLogoutModal, hide, isOpen } = useModal();
  const dispatch = useDispatch();

  const auth = useSelector((state: AppState) => state.auth);
  const isAuthenticated = get(auth, 'loggedIn');
  const isLoading = get(auth, 'loading.login');

  const onConfirmLogout = () => {
    hide();
    dispatch(userLogout());
  };

  return (
    <header
      className={classNames('flex justify-between align-center b-header', {
        _login: !isAuthenticated
      })}
    >
      <nav className="flex align-center b-header__main-nav">
        <HeaderLogo to="/app/dashboard" />
      </nav>
      {isAuthenticated && !isLoading ? <UserNav openLogoutModal={openLogoutModal} /> : <AuthNav />}
      <ConfirmModal title="Are you sure log out?" onConfirm={onConfirmLogout} hide={hide} isOpen={isOpen} />
    </header>
  );
};

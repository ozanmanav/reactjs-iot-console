import React, { FunctionComponent, HTMLAttributes } from 'react';
import './Header.scss';
import { Logo, CustomNavLink, useModal, Icon } from '../ui';
import classNames from 'classnames';
import { NavLinkProps, NavLink } from 'react-router-dom';
import { AuthState } from '../../store/auth/types';
import { userLogout } from '../../store/auth/actions';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { User } from 'firebase';
import { ConfirmModal } from '../modals';
import Avatar from 'react-avatar';

export const HeaderLogo: FunctionComponent<HTMLAttributes<HTMLAnchorElement> & NavLinkProps> = ({ className, to }) => {
  return (
    <CustomNavLink to={to} className={classNames('b-header__link flex', className)}>
      <Logo className="b-header__logo" />
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

interface UserNavProps {
  user?: User;
  userLogout: () => void;
}
export const UserNavBase: FunctionComponent<UserNavProps> = ({ user, userLogout }) => {
  const { open, hide, isOpen } = useModal();
  return (
    <nav className="b-header-user">
      <div className="b-header-user__info-wrapper">
        <button className="flex align-center b-header-user__container-button">
          <div className="b-header-user__container flex align-center justify-center _font-bold _text-primary">
            {' '}
            {user && user.photoURL ? (
              <Avatar round={true} src={(user && user.photoURL) || ''} size="40" />
            ) : (
              <Icon icon="avatar" />
            )}{' '}
          </div>
          <div className="flex flex-column b-header-user__info">
            <div className=" _text-left _font-bold">{user && user.email}</div>
          </div>
        </button>
      </div>
      <Icon icon="logout" width={20} height={20} onClick={open} className="_cursor-pointer" />
      <ConfirmModal title="Are you sure log out?" onConfirm={userLogout} hide={hide} isOpen={isOpen} />
    </nav>
  );
};

const mapStateToPropsUser = (state: AppState) => ({
  user: state.auth.user
});

export const UserNav = connect(
  mapStateToPropsUser,
  { userLogout }
)(UserNavBase);

interface LandingHeaderBaseProps {
  auth?: AuthState;
}

const LandingHeaderBase: FunctionComponent<LandingHeaderBaseProps> = ({ auth }) => {
  return (
    <header
      className={classNames('flex justify-between align-center b-header', {
        _login: auth && !auth.loggedIn
      })}
    >
      <nav className="flex align-center b-header__main-nav">
        <HeaderLogo to="/app/dashboard" />
      </nav>
      {auth && auth.loggedIn ? <UserNav /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

export const LandingHeader = connect(
  mapStateToProps,
  null
)(LandingHeaderBase);

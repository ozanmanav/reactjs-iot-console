import React, { FunctionComponent, useState } from 'react';
import './UserNav.scss';
import { AppState } from '../../../store';
import { useSelector } from 'react-redux';
import AvatarImage from '../../../icons/avatar.svg';
import Avatar from 'react-avatar';
import get from 'lodash.get';
import { useClickOutside } from '../../../hooks';
import classNames from 'classnames';
import { Icon } from '../../ui';
import { NavLink } from 'react-router-dom';

interface UserNavProps {
  openLogoutModal: () => void;
}

export const UserNav: FunctionComponent<UserNavProps> = ({ openLogoutModal }) => {
  const currentUser = useSelector((state: AppState) => state.user.currentUser);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const firstName = get(currentUser, 'firstname');
  const profilePhoto = get(currentUser, 'profilePhoto') || AvatarImage;

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const wrapperRef = useClickOutside<HTMLDivElement>(closeMenu);

  return (
    <nav
      className={classNames('b-user-nav', {
        _open: !showMenu
      })}
      ref={wrapperRef}
      onClick={toggleMenu}
    >
      <div className="b-user-nav__avatar">
        <Avatar round={true} src={profilePhoto} size="45px" />
      </div>

      <div className="b-user-nav__info">
        <div className="b-user-nav__info-text">{firstName}</div>
        <Icon icon="blackArrow" className="b-user-nav__arrow" />
      </div>

      {showMenu && (
        <div className="b-user-nav__menu">
          <ul>
            <NavLink to="/app/account">
              <li>Account </li>
            </NavLink>

            <li onClick={openLogoutModal} className="b-user-nav__menu-logout">
              <Icon icon="logout" className="b-user-nav__menu-logout__icon" />
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

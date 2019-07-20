import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LeftNav.scss';
import Logo from '../../Assets/NavBarLogo.svg';

const LeftNavLogo = () => (
  <NavLink to={'/'}>
    <div className={styles['logo-header']}>
      <div className={styles.logo}>
        <img src={Logo} alt={'logo'} width={108} height={30} />
      </div>
    </div>
  </NavLink>
);

export default LeftNavLogo;

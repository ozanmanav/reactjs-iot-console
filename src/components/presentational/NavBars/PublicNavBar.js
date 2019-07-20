import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PublicNavBar.scss';
import logo from './NavBarLogo.svg';

const PublicNavBar = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src={logo} alt={'logo'} />
    </div>
    <NavLink to={'/register'}>
      <div className={styles.signUp}>
        <div className={styles.signupText}>
          Sign Up
        </div>
      </div>
    </NavLink>
    <NavLink to={'/login'}>
      <div className={styles.login}>
        <div className={styles.loginText}>
          Log In
        </div>
      </div>
    </NavLink>
  </div>
);

export default PublicNavBar;

import React from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import styles from './LeftNav.scss';
import AccountIcon from '../../Assets/account-icon.svg';
import LeftNavHeader from './LeftNavHeader';

// const subItems = ['Profile', 'Billing', 'Security'];

const LeftNavAccountContainer = () => (
  <div className={styles['nav-container']}>
    <LeftNavHeader text={'Account'} image={AccountIcon} />
    {/* <div className={styles['nav-list']}>
      {
        subItems.map(item => (
          <NavLink to={`/account/${item.toLowerCase()}`} key={item}>
            <div className={styles['nav-list']}>
              <div
                className={classnames(
                  styles['no-icon'],
                  styles['nav-item'],
                  { [styles.active]: props.activeItem === `/${item.toLowerCase()}` }
                )}
              >
                {item}
              </div>
            </div>
          </NavLink>
        ))
      }
    </div> */}
  </div>
);

LeftNavAccountContainer.propTypes = {
  activeItem: PropTypes.string.isRequired,
};

export default LeftNavAccountContainer;

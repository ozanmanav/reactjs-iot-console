import React from 'react';
import * as classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './LeftNav.scss';

const LeftNavHeader = props => (
  <div className={styles.header}>
    <img src={props.image} alt="logo" className={styles.icon} />
    <span
      className={classnames({
        [styles.active]: props.activeItem === `/${props.text.toLowerCase()}`
      })}
    >{props.text}
    </span>
  </div>
);

LeftNavHeader.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  activeItem: PropTypes.string,
};

export default LeftNavHeader;

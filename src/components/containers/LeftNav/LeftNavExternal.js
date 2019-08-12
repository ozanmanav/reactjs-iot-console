import React from 'react';
import * as classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './LeftNav.scss';

const LeftNavExternal = props => (
  <div
    className={styles.header}
    onClick={() => {
      window.location.assign(props.extLink);
      return;
    }}
  >
    <img src={props.image} alt="logo" className={styles.icon} />
    <span
      className={classnames({
        [styles.active]: props.activeItem === `/${props.text.toLowerCase()}`
      })}
    >{props.text}
    </span>
  </div>
);

LeftNavExternal.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  activeItem: PropTypes.string,
};

export default LeftNavExternal;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../containers/Projects/AddDevice/AddDevice.scss';

const BrandCard = props => (
  <div className={styles['brand-card']} onClick={props.onClick} id={props.name}>
    <div className={classnames(styles.brands, { [styles.active]: props.active })}>
      <div className={classnames(styles.arrow, { [styles.active]: props.active })} />
    </div>
    <div
      className={classnames(styles['brand-name'], { [styles.active]: props.active })}
    >
      {props.name}
    </div>
  </div>
);

BrandCard.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
};

export default BrandCard;

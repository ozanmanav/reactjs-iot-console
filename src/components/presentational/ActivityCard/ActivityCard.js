import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActivityCard.scss';

const ActivityCard = props => (
  <div className={styles.container}>
    <div className={styles.info}>
      <h5 className={styles.description}>{props.description}</h5>
      <p className={styles.time}>{props.time}</p>
    </div>
  </div>
);

ActivityCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
};

export default ActivityCard;

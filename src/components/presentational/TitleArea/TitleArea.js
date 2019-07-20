import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './TitleArea.scss';

const TitleArea = (
  { title, activeNumber, limitNumber, addURL, addText, numbers }) => (
  <div className={styles['title-container']}>
    <h4 className={styles['title-details-title']}>
      {title}
      {
        numbers &&
        <span className={styles['title-number']}> ({activeNumber} of {limitNumber})</span>
      }
    </h4>
    {
      addURL &&
      <Link style={{ marginLeft: 'auto' }} to={addURL}>
        <button className={styles.add}>
          <span className={styles.icon} />{addText}
        </button>
      </Link>
    }
  </div>
);

TitleArea.propTypes = {
  title: PropTypes.string.isRequired,
  addURL: PropTypes.string,
  addText: PropTypes.string.isRequired,
  activeNumber: PropTypes.number,
  limitNumber: PropTypes.number,
  numbers: PropTypes.bool,
};

export default TitleArea;

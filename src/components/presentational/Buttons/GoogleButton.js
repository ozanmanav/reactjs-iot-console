import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoogleButton.scss';

const GoogleButton = ({ onClick }) => (
  <div className={styles.container}>
    <span />
    <div className={styles.vertical} />
    <button onClick={onClick}>
      Continue with Google
    </button>
  </div>
  );

GoogleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoogleButton;

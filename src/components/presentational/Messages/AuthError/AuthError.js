import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthError.scss';

const AuthError = ({ text }) => (
  <div className={styles.container}>
    {text}
  </div>
);

AuthError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AuthError;

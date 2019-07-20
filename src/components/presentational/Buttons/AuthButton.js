import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthButton.scss';
import ButtonLoader from '../ButtonLoader/ButtonLoader';

const AuthButton = ({ text, loading, onClick, style }) => (
  <button
    className={styles['login-button-container']}
    onClick={onClick}
    style={style}
  >
    {loading ? <ButtonLoader /> : text}
  </button>
);

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default AuthButton;


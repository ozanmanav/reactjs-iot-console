import React from 'react';
import PropTypes from 'prop-types';
import styles from './GithubButton.scss';

const GithubButton = ({ onClick }) => (
  <div className={styles.container}>
    <span />
    <div className={styles.vertical} />
    <button onClick={onClick}>
      Continue with Github
    </button>
  </div>
);

GithubButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GithubButton;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Breadcrumbs.scss';

function Breadcrumbs(props) {
  return (
    <div className={styles.breadcrumbs}>
      {props.route}
      {
        props.link &&
        <Link to={props.link} className={styles.link}>{props.linkText} / </Link>
      }
      <span className={styles.active}>{props.present}</span>
    </div>
  );
}

Breadcrumbs.propTypes = {
  route: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  present: PropTypes.string,
};

export default Breadcrumbs;

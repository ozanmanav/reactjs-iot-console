import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import styles from './Success.scss';

const classnames = require('classnames');

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Success = ({ in: inProp, text, close }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        className={styles.container}
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <div className={styles['text-area']}>
          {text}
          <i onClick={close} className={classnames('material-icons', styles.close)}>close</i>
        </div>
      </div>
    )}
  </Transition>
);

Success.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Success;

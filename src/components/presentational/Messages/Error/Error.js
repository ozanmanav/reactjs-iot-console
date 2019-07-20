import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import styles from './Error.scss';

const classnames = require('classnames');

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  zIndex: 0
};

const transitionStyles = {
  entering: { opacity: 0, zIndex: 0 },
  entered: { opacity: 1, zIndex: 1000 },
};

const Error = ({ in: inProp, text, close }) => (
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
          {
            // eslint-disable-next-line no-nested-ternary
            text && text.response && text.response.data ?
              text.response.data.Message :
              typeof text === 'string' ? text :
                'Something went wrong. Please try again.'
          }
          <i onClick={close} className={classnames('material-icons', styles.close)}>close</i>
        </div>
      </div>
    )}
  </Transition>
);

Error.propTypes = {
  text: PropTypes.string,
};

export default Error;

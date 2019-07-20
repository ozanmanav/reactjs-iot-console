import React from 'react';
import FloatingLabelInput from 'react-floating-label-input';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';
import styles from './FloatingLabelField.scss';

function FloatingLabelField({ id, label, type, onChange, value, optionalClass }) {
  return (
    <FloatingLabelInput
      id={id}
      label={label}
      onChange={onChange}
      value={value}
      type={type}
      className={classnames(styles.form, optionalClass)}
      autocomplete={type === 'password' ? 'current-password' : 'username'}
    />
  );
}

FloatingLabelField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FloatingLabelField;

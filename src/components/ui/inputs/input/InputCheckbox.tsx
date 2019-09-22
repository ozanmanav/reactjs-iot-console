import React, { FunctionComponent } from 'react';
import '../Input.scss';
import classnames from 'classnames';
import { IInputProps } from '../config';
import { CheckboxSwitch } from '../checkbox';

export const InputCheckbox: FunctionComponent<IInputProps> = ({
  type = 'name',
  error,
  touched,
  className,
  marginBottom = 'normal',
  squared,
  placeholder,
  ...props
}) => {
  const inputClassname = classnames([
    'f-input flex align-center justify-between',
    { [`_margin-bottom-${marginBottom}`]: marginBottom !== 'none' },
    { _squared: squared },
    { _error: error && touched },
    className
  ]);

  return (
    <div className="f-input__wrapper">
      <label className={inputClassname}>
        <span className="_text-grey">{placeholder}</span>
        <CheckboxSwitch {...props} />
      </label>
      {error && touched && <div className="f-input__error">{error}</div>}
    </div>
  );
};

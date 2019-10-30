import React, { FunctionComponent, useRef } from 'react';
import classnames from 'classnames';
import { IInputProps } from '../config';
import { Icon } from '../../icons';
import copy from 'copy-to-clipboard';
import { showSuccessToast, showErrorToast } from '../../toasts';

export const Input: FunctionComponent<IInputProps> = ({
  type = 'name',
  error,
  touched,
  className,
  marginBottom = 'normal',
  squared,
  showCopyIcon,
  copyText = 'Copied!',
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputClassname = classnames([
    'f-input',
    { [`_margin-bottom-${marginBottom}`]: marginBottom !== 'none' },
    { _squared: squared },
    { _error: error && touched },
    className
  ]);

  const copyToClipboard = (): void => {
    if (inputRef && inputRef.current) {
      try {
        copy(inputRef.current.value);
        showSuccessToast(copyText);
      } catch (error) {
        showErrorToast('Unable to write to clipboard. :-(');
      }
    }
  };

  return (
    <div className="f-input__wrapper">
      <input type={type} {...props} className={inputClassname} ref={inputRef} />
      {showCopyIcon && (
        <Icon icon="copy" className="f-input__wrapper-copy" onClick={copyToClipboard} alt="Copy to Clipboard" />
      )}
      {error && touched && <div className="f-input__error">{error}</div>}
    </div>
  );
};

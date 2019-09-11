import React, { FunctionComponent, useRef } from 'react';
import classnames from 'classnames';
import { IInputProps } from '../config';
import { Icon } from '../../icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { showSuccessToast } from '../../toasts';

export const Input: FunctionComponent<IInputProps> = ({
    type = 'name',
    error,
    touched,
    className,
    marginBottom = 'normal',
    squared,
    showCopyIcon,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputClassname = classnames([
        'f-input',
        { [`_margin-bottom-${marginBottom}`]: marginBottom !== 'none' },
        { _squared: squared },
        { _error: error && touched },
        className,
    ]);

    const copyToClipboard = (e: any) => {
        if (inputRef && inputRef.current) {
            navigator.clipboard.writeText(inputRef.current.value);
            showSuccessToast('Copied to Clipboard!');
        }
    };

    return (
        <div className="f-input__wrapper">
            <input type={type} {...props} className={inputClassname} ref={inputRef} />
            {showCopyIcon && <Icon icon="copy" className="f-input__wrapper-copy" onClick={copyToClipboard} alt="Copy to Clipboard" />}
            {error && touched && <div className="f-input__error">{error}</div>}
        </div>
    );
};

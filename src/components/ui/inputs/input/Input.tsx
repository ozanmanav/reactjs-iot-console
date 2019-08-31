import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { IInputProps } from '../config';

export const Input: FunctionComponent<IInputProps> = ({
    type = 'name',
    error,
    touched,
    className,
    marginBottom = 'normal',
    squared,
    ...props
}) => {
    const inputClassname = classnames([
        'f-input',
        { [`_margin-bottom-${marginBottom}`]: marginBottom !== 'none' },
        { _squared: squared },
        { _error: error && touched },
        className,
    ]);

    return (
        <div className="f-input__wrapper">
            <input type={type} {...props} className={inputClassname} />
            {error && touched && <div className="f-input__error">{error}</div>}
        </div>
    );
};

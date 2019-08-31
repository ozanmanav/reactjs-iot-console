import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import './CheckboxSwitch.scss';
import classNames from 'classnames';

export const CheckboxSwitch: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({ children, className, ...props }) => {
    const checkboxClassName = classNames(['f-checkbox-switch', className]);

    return <input type="checkbox" className={checkboxClassName} {...props} />;
};

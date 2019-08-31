import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import './Checkbox.scss';
import { IInputBaseProps } from '../config';
import classNames from 'classnames';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement>, IInputBaseProps {
    label?: string;
}

export const Checkbox: FunctionComponent<ICheckboxProps> = ({ children, marginBottom = 'normal', label, ...props }) => {
    const wrapperClassName = classNames([
        'f-checkbox__wrapper flex align-center',
        { [`_margin-bottom-${marginBottom}`]: marginBottom !== 'none' },
    ]);

    return (
        <div className={wrapperClassName}>
            <label className="f-checkbox__label flex align-center">
                <input type="checkbox" className="f-checkbox" {...props} />
                <span className="f-checkbox__label-text">{label}</span>
            </label>
            {children}
        </div>
    );
};

import React, { FunctionComponent } from 'react';
import './RadioInput.scss';
import classnames from 'classnames';
import { IRadioProps } from '../config';

export const RadioInput: FunctionComponent<IRadioProps> = ({ label, className, ...props }) => {
    const wrapperClassName = classnames(['f-radio__wrapper', className]);

    return (
        <label className={wrapperClassName}>
            <input className="f-radio" type="radio" {...props} />
            {label && <span>{label}</span>}
        </label>
    );
};

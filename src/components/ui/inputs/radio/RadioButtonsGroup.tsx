import React, { FunctionComponent, SyntheticEvent } from 'react';
import '../Input.scss';
import { IRadioProps } from '../config';
import classNames from 'classnames';

const RadioButton: FunctionComponent<IRadioProps> = ({
    className,
    marginBottom = 'normal',
    value,
    selected,
    ...props
}) => {
    const inputClassName = classNames([
        'f-input _radio-btn',
        { [`_margin-bottom-${marginBottom}`]: marginBottom !== 'none' },
        { _selected: selected },
        className
    ]);

    return (
        <label className={inputClassName}>
            {value}
            <input type="radio" value={value} {...props} hidden />
        </label>
    );
};

interface IRadioButtonsGroupProps {
    inputs: IRadioProps[];
    name: string;
    selected: string | number;
    onChange: (e: SyntheticEvent) => void;
    wrapperClassName?: string;
}

export const RadioButtonsGroup: FunctionComponent<IRadioButtonsGroupProps> = ({
    wrapperClassName,
    inputs,
    name,
    selected,
    onChange
}) => {
    const wrapperElClassName = classNames(['flex', wrapperClassName]);

    return (
        <div className={wrapperElClassName}>
            {inputs.map(input => (
                <RadioButton
                    {...input}
                    key={input.value}
                    name={name}
                    selected={input.value === selected}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};

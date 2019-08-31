import React, { FunctionComponent, SelectHTMLAttributes, useRef, useState } from 'react';
import './Select.scss';
import { IInputBaseProps } from '../config';
import classNames from 'classnames';
import { OptionItem } from './OptionItem';
import { useClickOutside } from '../../../../hooks';
import { splitOptionsIntoGroups } from './utils';
import { REST_GROUP_NAME } from './config';

export interface ISelectOption {
    value: string | number;
    label?: string;
    group?: string;
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement>, IInputBaseProps {
    options: ISelectOption[];
    placeholder?: string;
    button?: boolean;
    position?: 'top';
}

export const Select: FunctionComponent<ISelectProps> = ({
    value,
    onChange,
    options,
    className,
    placeholder,
    button,
    error,
    touched,
    marginBottom = 'normal',
    position,
    ...props
}) => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const selectWrapperRef = useClickOutside<HTMLDivElement>(hideOptions);

    const [shouldShowOptions, setShouldShowOptions] = useState<boolean>(false);

    const selectClassName = classNames([
        'f-select _text-left',
        { _selected: value && value !== '' },
        { _error: error && touched },
        { _opened: shouldShowOptions },
    ]);
    const selectWrapperClassName = classNames([
        'f-select__wrapper',
        { [`_margin-bottom-${marginBottom}`]: marginBottom !== 'none' },
        { _button: button },
        { [`_${position}`]: position },
        className,
    ]);

    function hideOptions() {
        setShouldShowOptions(false);
    }

    function toggleOptions() {
        setShouldShowOptions((prevState) => !prevState);
    }

    // https://github.com/facebook/react/issues/11488#issuecomment-347775628
    // https://github.com/facebook/react/issues/11488#issuecomment-470623779
    function onSelfChange(value: string | number) {
        const select = selectRef.current;

        if (!select) {
            return;
        }

        const lastValue = select.value;
        select.value = value.toString();

        const event = new Event('change', { bubbles: true });

        // @ts-ignore
        const tracker = select._valueTracker;

        if (tracker) {
            tracker.setValue(lastValue);
        }

        select.dispatchEvent(event);

        setShouldShowOptions(false);
    }

    const selectedOption = options.find(({ value: v }) => v === value);
    const buttonText = selectedOption ? selectedOption.label || selectedOption.value : placeholder;

    const groupedOptions = splitOptionsIntoGroups(options);

    return (
        <div className={selectWrapperClassName} ref={selectWrapperRef}>
            <select className="_none" value={value} onChange={onChange} {...props} ref={selectRef}>
                <option value="" hidden>
                    {placeholder}
                </option>
                {options.map(({ value, label }) => (
                    <option value={value} key={value + (label || '')}>
                        {label || value}
                    </option>
                ))}
            </select>
            <button className={selectClassName} type="button" onClick={toggleOptions} disabled={props.disabled}>
                {buttonText}
            </button>
            {shouldShowOptions && (
                <div className="f-select__options-list">
                    {/* all groups */}
                    {Object.keys(groupedOptions).map(
                        (key) =>
                            key !== REST_GROUP_NAME && (
                                <>
                                    <p className="f-select__group-title _font-bold">{key}</p>
                                    {groupedOptions[key].map((option) => (
                                        <OptionItem
                                            {...option}
                                            selected={option.value === value}
                                            key={option.value + (option.label || '')}
                                            onChange={onSelfChange}
                                            grouped
                                        />
                                    ))}
                                </>
                            )
                    )}
                    {/* rest */}
                    {groupedOptions[REST_GROUP_NAME] &&
                        groupedOptions[REST_GROUP_NAME].map((option) => (
                            <OptionItem
                                {...option}
                                selected={option.value === value}
                                key={option.value + (option.label || '')}
                                onChange={onSelfChange}
                            />
                        ))}
                </div>
            )}
            {error && touched && <div className="f-select__error">{error}</div>}
        </div>
    );
};

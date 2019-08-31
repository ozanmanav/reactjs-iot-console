import React, { FunctionComponent } from 'react';
import { ISelectOption } from './Select';
import classNames from 'classnames';

interface IOptionItemProps extends ISelectOption {
    onChange: (value: string | number) => void;
    selected: boolean;
    grouped?: boolean;
}

export const OptionItem: FunctionComponent<IOptionItemProps> = ({ selected, label, value, onChange, grouped }) => {
    function onSelfChange() {
        onChange(value);
    }

    const buttonClassName = classNames(['block f-select__option-item _text-left', { _selected: selected }, { _grouped: grouped }]);

    const displayText = label || value;

    return (
        <button onClick={onSelfChange} type="button" className={buttonClassName} title={displayText.toString()}>
            {displayText}
        </button>
    );
};

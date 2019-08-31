import React, { FunctionComponent } from 'react';
import './SearchInput.scss';
import { Icon } from '../../icons';
import { IInputProps } from '../config';
import { Input } from './Input';
import classNames from 'classnames';

export const SearchInput: FunctionComponent<IInputProps> = ({ placeholder = 'Search', className, ...props }) => {
    const wrapperClassName = classNames(['b-search-input__wrapper', className]);

    return (
        <div className={wrapperClassName}>
            <Input placeholder={placeholder} className="b-search-input" {...props} autoComplete="off" />
            <Icon icon="search" className="b-search-input__icon" />
        </div>
    );
};

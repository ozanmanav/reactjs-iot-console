import React, { FunctionComponent, HTMLAttributes } from 'react';
import './FormsUI.scss';
import classNames from 'classnames';

export const FormCaption: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ className, children }) => {
    return <p className={classNames('f-caption', className)}>{children}</p>;
};

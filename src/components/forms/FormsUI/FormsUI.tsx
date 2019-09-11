import React, { FunctionComponent, HTMLAttributes } from 'react';
import './FormsUI.scss';
import classNames from 'classnames';

interface IHTMLElementProps extends HTMLAttributes<HTMLElement> {}

export const FormCaption: FunctionComponent<IHTMLElementProps> = ({ className, children }) => {
    return <p className={classNames('f-caption', className)}>{children}</p>;
};

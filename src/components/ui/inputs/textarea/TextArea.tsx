import React, { FunctionComponent, TextareaHTMLAttributes } from 'react';
import { IInputBaseProps } from '../config';
import classNames from 'classnames';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, IInputBaseProps {}

export const TextArea: FunctionComponent<ITextAreaProps> = ({ className, marginBottom = 'normal', ...props }) => {
  const textAreaClassName = classNames([
    'f-input _textarea',
    { [`_margin-bottom-${marginBottom}`]: marginBottom !== 'none' },
    className
  ]);

  return <textarea className={textAreaClassName} {...props} />;
};

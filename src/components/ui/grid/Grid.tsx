import React, { FunctionComponent, HTMLAttributes } from 'react';
import './Grid.scss';
import { appendClassName } from '../../../utils';

interface IGridProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FunctionComponent<IGridProps> = ({ className, children }) => {
  const wrapperClassName = appendClassName('container', className);

  return <div className={wrapperClassName}>{children}</div>;
};

interface IRowProps extends IGridProps {
  gutter?: 'sm' | 'md' | 'lg';
}

export const Row: FunctionComponent<IRowProps> = ({ className, gutter, children }) => {
  let wrapperClassName = appendClassName('row', className);

  if (gutter) {
    wrapperClassName += ` _gutter-${gutter}`;
  }

  return <div className={wrapperClassName}>{children}</div>;
};

interface IColumnProps extends IGridProps {
  width?: 3 | 4 | 6 | 12;
}

export const Column: FunctionComponent<IColumnProps> = ({ className, width = 6, children }) => {
  const wrapperClassName = appendClassName(width === 12 ? 'col' : `col-${width}`, className);

  return <div className={wrapperClassName}>{children}</div>;
};

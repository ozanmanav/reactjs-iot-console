import React, { FunctionComponent, HTMLAttributes } from 'react';
import './Modal.scss';
import { appendClassName } from '../../../utils';
import { Icon } from '../';
import classnames from 'classnames';

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  hide: () => void;
  isOpen: boolean;
  overflow?: 'visible' | 'hidden';
}

export const Modal: FunctionComponent<IModalProps> = ({ isOpen, hide, className, children, overflow }) => {
  if (!isOpen) {
    return null;
  }

  const modalClassName = classnames(['b-modal flex align-center justify-center', className]);

  const windowClassName = classnames(['b-modal__window', { [`_overflow-${overflow}`]: overflow }]);

  return (
    <div className={modalClassName}>
      <div className={windowClassName}>
        <button className="b-modal__close" onClick={hide}>
          <Icon icon="plusGrey" className="b-modal__close-icon" />
        </button>
        <div className="b-modal__content">{children}</div>
      </div>
      <div className="b-modal__backdrop" onClick={hide} />
    </div>
  );
};

export const ModalFooter: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ className, children }) => {
  const footerClassName = appendClassName('b-modal__footer flex', className);

  return <footer className={footerClassName}>{children}</footer>;
};

import React, { FunctionComponent } from 'react';
import './Accordion.scss';
import { Icon, InfoTooltip } from '../';
import classNames from 'classnames';

interface IAccordionProps {
  title: string;
  isOpen: boolean;
  toggle?: (index: number) => void;
  index?: number;
  tooltip?: string;
  CustomHeader?: React.ComponentType<any>;
}

export const Accordion: FunctionComponent<IAccordionProps> = ({
  index,
  isOpen,
  title,
  tooltip,
  toggle,
  children,
  CustomHeader
}) => {
  function toggleSelf() {
    toggle && index && toggle(index);
  }

  return (
    <div className={classNames('b-accordion__wrapper', { _open: isOpen })}>
      <button
        className={classNames('b-accordion__header flex justify-between align-center', {
          'b-accordion__header_custom': CustomHeader
        })}
        onClick={toggleSelf}
      >
        {CustomHeader ? (
          <CustomHeader />
        ) : (
          <h3 className="b-accordion__title flex align-center">
            {title}
            {tooltip && <InfoTooltip text={tooltip} />}
          </h3>
        )}
        <Icon icon="accordionArrow" className="b-accordion__arrow" />
      </button>
      <div className="b-accordion__content">{children}</div>
    </div>
  );
};

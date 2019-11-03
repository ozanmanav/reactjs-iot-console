import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Onboard.scss';
import { Icon } from '../ui';

interface OnboardStepProps {
  step: number;
  title: string;
  finished?: boolean;
  active?: boolean;
}

const OnboardStep: FunctionComponent<OnboardStepProps> = ({ step, title, finished = false, active = false }) => {
  return (
    <div
      className={classNames('c-onboard-step', {
        finished,
        active
      })}
    >
      <div className="c-onboard-step__circle">{finished ? <Icon icon="checkmark" width={14} height={14} /> : step}</div>
      <div className="c-onboard-step__title">{title}</div>
    </div>
  );
};

export const Onboard: FunctionComponent = () => {
  return (
    <div className="c-onboard">
      <div className="c-onboard-steps">
        <OnboardStep step={1} title="Create Project" finished={true} />
        <OnboardStep step={2} title="Add Device" active={true} />
        <OnboardStep step={3} title="Connection Details" />
      </div>

      <div className="c-onboard-divider"></div>
      <div className="c-onboard-content">CONTENT</div>
    </div>
  );
};

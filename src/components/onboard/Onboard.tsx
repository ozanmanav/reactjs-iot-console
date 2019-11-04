import React, { FunctionComponent, useState, useEffect } from 'react';
import classNames from 'classnames';

import './Onboard.scss';
import { Icon, Button } from '../ui';
import { useOnboardSteps } from './useOnboardSteps';
import { CreateProjectForm } from '../forms/CreateProjectForm';
import { ICreateProjectFormState } from '../forms/CreateProjectForm/definitions';
import { AddDeviceForm } from '../forms/AddDeviceForm';
import { IAddDeviceFormState } from '../forms/AddDeviceForm/definitions';
import { useDispatch } from 'react-redux';
import { getDeviceBrands } from '../../store/project/actions';

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
  const reduxDispatch = useDispatch();
  const { isActiveStep, activeStep, isFinishedStep, goNextOnboardStep, goPrevOnboardStep } = useOnboardSteps(3);
  const [createProjectState, setCreateProjectState] = useState<ICreateProjectFormState>();
  const [addDeviceFormState, setAddDeviceFormState] = useState<IAddDeviceFormState>();

  useEffect(() => {
    if (getDeviceBrands) {
      reduxDispatch(getDeviceBrands());
    }
  }, []);

  const onClickCreateProject = (values: ICreateProjectFormState) => {
    setCreateProjectState(values);
    goNextOnboardStep();
  };

  const onClickAddDevice = (values: IAddDeviceFormState) => {
    setAddDeviceFormState(values);
    goNextOnboardStep();
  };

  return (
    <div className="c-onboard">
      <div className="c-onboard-steps">
        <OnboardStep step={1} title="Create Project" active={isActiveStep(1)} finished={isFinishedStep(1)} />
        <OnboardStep step={2} title="Add Device" active={isActiveStep(2)} finished={isFinishedStep(2)} />
        <OnboardStep step={3} title="Connection Details" active={isActiveStep(3)} finished={isFinishedStep(3)} />
      </div>

      <div className="c-onboard-divider"></div>
      <div className="c-onboard-content">
        {(() => {
          switch (activeStep) {
            case 1:
              return <CreateProjectForm onSubmit={onClickCreateProject} initialValues={createProjectState} />;
            case 2:
              return <AddDeviceForm onSubmit={onClickAddDevice} initialValues={addDeviceFormState} disableValidation />;
            case 3:
              return <div>CONNECTION DETAILS </div>;
            default:
              return null;
          }
        })()}
        <Button text="Prev" className="c-onboard-prev" onClick={goPrevOnboardStep} />
      </div>
    </div>
  );
};

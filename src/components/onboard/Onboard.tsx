import React, { FunctionComponent, useEffect } from 'react';
import classNames from 'classnames';
import './Onboard.scss';
import { Icon } from '../ui';
import { useOnboardSteps } from './useOnboardSteps';
import { CreateProjectForm } from '../forms/CreateProjectForm';
import { ICreateProjectFormState } from '../forms/CreateProjectForm/definitions';
import { AddDeviceForm } from '../forms/AddDeviceForm';
import { IAddDeviceFormState } from '../forms/AddDeviceForm/definitions';
import { useDispatch } from 'react-redux';
import { getDeviceBrands, createProject, addDevice, resetCurrents } from '../../store/project/actions';
import { ConnectionDetails } from './connectionDetails';

interface OnboardStepProps {
  step: number;
  title: string;
  finished?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const OnboardStep: FunctionComponent<OnboardStepProps> = ({
  step,
  title,
  finished = false,
  active = false,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames('c-onboard-steps-step', {
        finished,
        active
      })}
    >
      <div className="c-onboard-steps-step__circle">
        {finished ? <Icon icon="checkmark" width={14} height={14} /> : step}
      </div>
      <div className="c-onboard-steps-step__title">{title}</div>
    </div>
  );
};

interface IOnboardProps {
  hideModal?: () => void;
}

export const Onboard: FunctionComponent<IOnboardProps> = ({ hideModal }) => {
  const reduxDispatch = useDispatch();

  const { isActiveStep, activeStep, isFinishedStep, goNextOnboardStep } = useOnboardSteps(3);

  useEffect(() => {
    reduxDispatch(resetCurrents());
    reduxDispatch(getDeviceBrands());
  }, []);

  const onClickCreateProject = (values: ICreateProjectFormState) => {
    const createValues: ICreateProjectFormState = {
      ...values,
      redirectToProject: false,
      fetchAfterCreate: true
    };

    reduxDispatch(createProject(createValues));
    goNextOnboardStep();
  };

  const onClickAddDevice = (values: IAddDeviceFormState) => {
    const addDeviceValues: IAddDeviceFormState = {
      ...values,
      redirectToProject: false,
      fetchAfterAdd: true
    };

    reduxDispatch(addDevice(addDeviceValues));
    goNextOnboardStep();
  };

  const onClickFinish = () => {
    if (hideModal) {
      hideModal();
    }
  };

  return (
    <div className="c-onboard">
      <h2 className="c-onboard__title">Welcome to the Qubitro</h2>
      <div className="c-onboard-steps">
        <OnboardStep step={1} title="Create Project" active={isActiveStep(1)} finished={isFinishedStep(1)} />
        <OnboardStep step={2} title="Add Device" active={isActiveStep(2)} finished={isFinishedStep(2)} />
        <OnboardStep step={3} title="Connection Details" active={isActiveStep(3)} finished={isFinishedStep(3)} />
      </div>

      <div className="c-onboard-content">
        {(() => {
          switch (activeStep) {
            case 1:
              return <CreateProjectForm onSubmit={onClickCreateProject} />;
            case 2:
              return <AddDeviceForm onSubmit={onClickAddDevice} disableValidation />;
            case 3:
              return <ConnectionDetails onClickFinish={onClickFinish} />;
            default:
              return null;
          }
        })()}
      </div>

      {/* <Button text="Prev" className="c-onboard-prev" onClick={goPrevOnboardStep} /> */}
    </div>
  );
};

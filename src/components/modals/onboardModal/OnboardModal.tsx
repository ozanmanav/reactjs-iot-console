import React, { FunctionComponent } from 'react';
import './OnboardModal.scss';
import { IModalProps, Modal, ModalFooter } from '../../ui/modal';
import { Formik } from 'formik';
import { Button } from '../../ui/buttons';
import { Input } from '../../ui/inputs/input';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { Onboard } from '../../onboard';

const OnboardModalSchema = Yup.object().shape({
  dashboardName: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

export interface IOnboardModalState {
  dashboardName: string;
}

const OnboardModalState: IOnboardModalState = {
  dashboardName: ''
};

interface IOnboardModalProps extends IModalProps {
  dashboardName?: string;
  onSubmitSuccess: (values: IOnboardModalState) => void;
}

export const OnboardModal: FunctionComponent<IOnboardModalProps> = ({ onSubmitSuccess, ...modalProps }) => {
  const onSubmit = (values: IOnboardModalState) => {
    onSubmitSuccess(values);
  };

  return (
    <Modal modalWindowClassName="b-onboard-modal__modal-window" {...modalProps}>
      <Onboard />
    </Modal>
  );
};

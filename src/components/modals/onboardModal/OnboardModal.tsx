import React, { FunctionComponent } from 'react';
import './OnboardModal.scss';
import { IModalProps, Modal } from '../../ui/modal';
import { Onboard } from '../../onboard';

export const OnboardModal: FunctionComponent<IModalProps> = ({ ...modalProps }) => {
  return (
    <Modal modalWindowClassName="b-onboard-modal__modal-window" {...modalProps}>
      <Onboard hideModal={modalProps.hide} />
    </Modal>
  );
};

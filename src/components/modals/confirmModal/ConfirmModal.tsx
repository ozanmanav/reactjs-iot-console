import React, { FunctionComponent, MouseEvent } from 'react';
import './ConfirmModal.scss';
import { IModalProps, Modal, ModalFooter } from '../../ui/modal';
import { Button } from '../../ui/buttons';

interface IConfirmModalProps extends IModalProps {
    title: string;
    description?: string;
    onConfirm: (e: MouseEvent) => void;
}

export const ConfirmModal: FunctionComponent<IConfirmModalProps> = ({
    title = 'Are you sure?',
    description,
    onConfirm,
    ...modalProps
}) => {
    return (
        <Modal {...modalProps}>
            <h2 className="h1 b-confirm-modal__title">{title}</h2>
            {description && <p className="b-confirm-modal__description">{description}</p>}
            <ModalFooter>
                <Button
                    text="Yes"
                    primary
                    icon="check"
                    onClick={onConfirm}
                    className="b-confirm-modal__actions-button"
                />
            </ModalFooter>
        </Modal>
    );
};

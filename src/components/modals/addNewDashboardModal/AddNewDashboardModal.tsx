import React, { FunctionComponent } from 'react';
import './AddNewDashboardModal.scss';
import { IModalProps, Modal, ModalFooter } from '../../ui/modal';
import { Formik } from 'formik';
import { Button } from '../../ui/buttons';
import { Input } from '../../ui/inputs/input';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

const AddNewDashboardModalSchema = Yup.object().shape({
  dashboardName: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

export interface IAddNewDashboardModalState {
  dashboardName: string;
}

const AddNewDashboardModalState: IAddNewDashboardModalState = {
  dashboardName: ''
};

interface IAddNewDashboardModalProps extends IModalProps {
  dashboardName?: string;
  onSubmitSuccess: (values: IAddNewDashboardModalState) => void;
}

export const AddNewDashboardModal: FunctionComponent<IAddNewDashboardModalProps> = ({
  onSubmitSuccess,
  ...modalProps
}) => {
  const onSubmit = (values: IAddNewDashboardModalState) => {
    onSubmitSuccess(values);
  };

  return (
    <Modal {...modalProps}>
      <Formik
        onSubmit={onSubmit}
        initialValues={AddNewDashboardModalState}
        validationSchema={AddNewDashboardModalSchema}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2 className="h1 b-content-header-name-modal__title">New Dashboard</h2>
            <Input
              name="dashboardName"
              placeholder="Type a Dashboard name"
              value={values.dashboardName}
              error={errors && errors.dashboardName}
              touched={touched && touched.dashboardName}
              onChange={handleChange}
              onBlur={handleBlur}
              marginBottom="none"
            />
            <ModalFooter>
              <Button text="Save" primary type="submit" />
            </ModalFooter>
          </form>
        )}
      />
    </Modal>
  );
};

import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import {
  IAddDashboardFormBaseProps,
  AddDashboardFormDefaultState,
  AddDashboardFormValidationSchema,
  IAddDashboardFormProps
} from './definitions';
import { Input, Select } from '../../ui';
import { Button } from '../../ui/buttons';
import './AddDashboardForm.scss';

const AddDashboardFormBase: FunctionComponent<IAddDashboardFormBaseProps> = ({ ...formikProps }) => {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } = formikProps;

  return (
    <form className="f-add-dashboard__form" onSubmit={handleSubmit}>
      <div className="f-add-dashboard__form-content">
        <h2 className="h1 f-add-dashboard__form-title">Add Dashboard</h2>
        <div className="f-add-dashboard__form-desc">Please enter a dashboard name</div>
        <Input
          placeholder="Enter Dashboard Name"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          error={errors && errors.name}
          touched={touched && touched.name}
        />

        <Button text="Save Dashboard" primary className="f-add-dashboard__form-action" type="submit" />
      </div>
    </form>
  );
};

export const AddDashboardForm: FunctionComponent<IAddDashboardFormProps> = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || AddDashboardFormDefaultState}
      validationSchema={AddDashboardFormValidationSchema}
      component={formikProps => <AddDashboardFormBase {...formikProps} />}
    />
  );
};

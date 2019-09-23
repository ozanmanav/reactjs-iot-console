import React, { FunctionComponent } from 'react';
import { Formik, FormikProps } from 'formik';
import './SignUpForm.scss';
import {
  SignUpFormDefaultState,
  SignUpFormValidationSchema,
  ISignUpFormProps,
  ISignUpFormDefaultState
} from './definitions';
import { Input } from '../../ui';
import { Button } from '../../ui/buttons';
import { ProviderLogin } from '../../providerLogin';

const SignUpFormBase: FunctionComponent<FormikProps<ISignUpFormDefaultState>> = ({ ...formikProps }) => {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } = formikProps;

  return (
    <form className="f-signup__form" onSubmit={handleSubmit}>
      <div className="f-signup__form-content">
        <h2 className="h1 f-signup__form-title">Sign Up</h2>
        <Input
          placeholder="First Name"
          name="firstname"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstname}
          error={errors && errors.firstname}
          touched={touched && touched.firstname}
        />
        <Input
          placeholder="Last Name"
          name="lastname"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastname}
          error={errors && errors.lastname}
          touched={touched && touched.lastname}
        />
        <Input
          placeholder="E-mail Address"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          error={errors && errors.email}
          touched={touched && touched.email}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          error={errors && errors.password}
          touched={touched && touched.password}
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          type="confirmPassword"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.confirmPassword}
          error={errors && errors.confirmPassword}
          touched={touched && touched.confirmPassword}
        />
        <Button text="Sign Up" primary className="f-signup__form-action" type="submit" />
      </div>
      <div className="f-signup__form-footer">
        <ProviderLogin />
        <button type="button" className="f-signup__form-input-link-forgot">
          Forgot password?
        </button>
      </div>
    </form>
  );
};

export const SignUpForm: FunctionComponent<ISignUpFormProps> = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || SignUpFormDefaultState}
      validationSchema={SignUpFormValidationSchema}
      component={formikProps => <SignUpFormBase {...formikProps} />}
    />
  );
};

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
                    placeholder="E-mail Address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    error={errors && errors.email}
                    touched={touched && touched.email}
                />
                <div className="f-signup__form-input-wrapper">
                    <Input
                        className="f-signup__form-input"
                        placeholder="Password"
                        name="password"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        error={errors && errors.password}
                        touched={touched && touched.password}
                    />
                </div>
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

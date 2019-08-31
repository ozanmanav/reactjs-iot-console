import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import './LoginForm.scss';
import { ILoginFormBaseProps, LoginFormDefaultState, LoginFormValidationSchema, ILoginFormProps } from './definitions';
import { Input } from '../ui';
import { Button, GithubButton, GoogleButton } from '../ui/buttons';

const LoginFormBase: FunctionComponent<ILoginFormBaseProps> = ({ ...formikProps }) => {
    const { values, handleSubmit, handleChange, errors, touched, handleBlur } = formikProps;

    return (
        <form className="f-login__form" onSubmit={handleSubmit}>
            <div className="f-login__form-content">
                <h2 className="h1 f-login__form-title">Log In</h2>
                <Input
                    placeholder="E-mail Address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    error={errors && errors.email}
                    touched={touched && touched.email}
                />
                <div className="f-login__form-input-wrapper">
                    <Input
                        className="f-login__form-input"
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
                <Button text="Log In" primary className="f-login__form-action" type="submit" />
            </div>
            <div className="f-login__form-footer">
                <GoogleButton text="Continue with Google" type="button" />
                <GithubButton text="Continue with GitHub" type="button" />
                <button type="button" className="f-login__form-input-link-forgot">
                    Forgot password?
                </button>
            </div>
        </form>
    );
};

export const LoginForm: FunctionComponent<ILoginFormProps> = ({ onSubmit, initialValues }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues || LoginFormDefaultState}
            validationSchema={LoginFormValidationSchema}
            component={(formikProps) => <LoginFormBase {...formikProps} />}
        />
    );
};

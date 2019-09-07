import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import './LoginForm.scss';
import { ILoginFormBaseProps, LoginFormDefaultState, LoginFormValidationSchema, ILoginFormProps } from './definitions';
import { Input } from '../../ui';
import { Button, GithubButton, GoogleButton } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import { ProviderLogin } from '../../providerLogin';

const LoginFormBase: FunctionComponent<ILoginFormBaseProps> = ({ ...formikProps }) => {
    const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading } = formikProps;

    return (
        <form className="f-signup__form" onSubmit={handleSubmit}>
            <div className="f-signup__form-content">
                <h2 className="h1 f-signup__form-title">Log In</h2>
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
                {loading ? (
                    <div className="f-signup__form-loader">
                        <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={loading} />
                    </div>
                ) : (
                    <Button text="Log In" primary className="f-signup__form-action" type="submit" />
                )}
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

export const LoginForm: FunctionComponent<ILoginFormProps> = ({ onSubmit, initialValues, loading }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues || LoginFormDefaultState}
            validationSchema={LoginFormValidationSchema}
            component={(formikProps) => <LoginFormBase {...formikProps} loading={loading} />}
        />
    );
};

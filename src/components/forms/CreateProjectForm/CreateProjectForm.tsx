import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import {
    ICreateProjectFormBaseProps,
    CreateProjectFormState,
    CreateProjectFormValidationSchema,
    ICreateProjectFormProps,
} from './definitions';
import { Input } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import './CreateProjectForm.scss';

const CreateProjectFormBase: FunctionComponent<ICreateProjectFormBaseProps> = ({ ...formikProps }) => {
    const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading } = formikProps;

    return (
        <form className="f-create-project__form" onSubmit={handleSubmit}>
            <div className="f-create-project__form-content">
                <h2 className="h1 f-create-project__form-title">Create Project</h2>
                <Input
                    placeholder="Project Name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    error={errors && errors.name}
                    touched={touched && touched.name}
                />
                <div className="f-create-project__form-input-wrapper">
                    <Input
                        className="f-create-project__form-input"
                        placeholder="Project Description"
                        name="description"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                        error={errors && errors.description}
                        touched={touched && touched.description}
                    />
                </div>
                {loading ? (
                    <div className="f-create-project__form-loader">
                        <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={loading} />
                    </div>
                ) : (
                    <Button text="Create Project" primary className="f-create-project__form-action" type="submit" />
                )}
            </div>
        </form>
    );
};

export const CreateProjectForm: FunctionComponent<ICreateProjectFormProps> = ({ onSubmit, initialValues, loading }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues || CreateProjectFormState}
            validationSchema={CreateProjectFormValidationSchema}
            component={(formikProps) => <CreateProjectFormBase {...formikProps} loading={loading} />}
        />
    );
};

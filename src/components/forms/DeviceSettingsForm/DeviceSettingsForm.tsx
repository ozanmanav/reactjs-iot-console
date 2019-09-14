import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import {
    IDeviceSettingsFormBaseProps,
    DeviceSettingsFormDefaultState,
    DeviceSettingsFormValidationSchema,
    IDeviceSettingsFormProps,
} from './definitions';
import { Input, Icon, useModal } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import { FormCaption } from '../FormsUI';
import { ConfirmModal } from '../../modals';
import './DeviceSettingsForm.scss';

const DeviceSettingsFormBase: FunctionComponent<IDeviceSettingsFormBaseProps> = ({ ...formikProps }) => {
    const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading } = formikProps;
    const { open, hide, isOpen } = useModal();

    return (
        <form className="f-device-settings__form" onSubmit={handleSubmit}>
            <div className="f-device-settings__form-content">
                <FormCaption>Device Token</FormCaption>
                <Input
                    placeholder="Device Token"
                    name="deviceToken"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.deviceToken}
                    error={errors && errors.deviceToken}
                    touched={touched && touched.deviceToken}
                />
                <FormCaption>Client Secret</FormCaption>
                <Input
                    placeholder="Client Secret"
                    name="clientSecret"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.clientSecret}
                    error={errors && errors.clientSecret}
                    touched={touched && touched.clientSecret}
                />
                <FormCaption>Device Name</FormCaption>
                <Input
                    placeholder="Project Name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    error={errors && errors.name}
                    touched={touched && touched.name}
                />
                <FormCaption>Device Description</FormCaption>
                <Input
                    className="f-device-settings__form-input"
                    placeholder="Project Description"
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    error={errors && errors.description}
                    touched={touched && touched.description}
                />
                {loading ? (
                    <div className="f-device-settings__form-loader">
                        <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={loading} />
                    </div>
                ) : (
                    <div className="f-device-settings__form-action-container">
                        <Button text="Save" primary className="f-device-settings__form-action" type="submit" />
                        <Icon icon="trash" className="_cursor-pointer" onClick={open} />
                        <ConfirmModal
                            title="Are you sure log out?"
                            onConfirm={() => console.log('delete project')}
                            hide={hide}
                            isOpen={isOpen}
                        />
                    </div>
                )}
            </div>
        </form>
    );
};

export const DeviceSettingsForm: FunctionComponent<IDeviceSettingsFormProps> = ({ onSubmit, initialValues, loading }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues || DeviceSettingsFormDefaultState}
            validationSchema={DeviceSettingsFormValidationSchema}
            component={(formikProps) => <DeviceSettingsFormBase {...formikProps} loading={loading} />}
        />
    );
};

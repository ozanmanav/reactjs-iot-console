import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import {
  IDeviceSettingsFormBaseProps,
  DeviceSettingsFormDefaultState,
  DeviceSettingsFormValidationSchema,
  IDeviceSettingsFormProps
} from './definitions';
import { Input, Icon, useModal } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import { FormCaption } from '../FormsUI';
import { ConfirmModal } from '../../modals';
import './DeviceSettingsForm.scss';
import isNil from 'ramda/es/isNil';

const DeviceSettingsFormBase: FunctionComponent<IDeviceSettingsFormBaseProps> = ({
  onClickDeviceDelete,
  ...formikProps
}) => {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading } = formikProps;
  const { open, hide, isOpen } = useModal();

  const onClickDeviceDeleteConfirm = () => {
    hide();
    onClickDeviceDelete();
  };

  return (
    <form className="f-device-settings__form" onSubmit={handleSubmit}>
      <div className="f-device-settings__form-content">
        <FormCaption>Device Token</FormCaption>
        <Input
          placeholder="Device Token"
          name="deviceToken"
          showCopyIcon={!isNil(values.deviceToken)}
          copyText="Device Token copied to clipboard!"
          disabled={true}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.deviceToken || 'Device Token not found'}
          error={errors && errors.deviceToken}
          touched={touched && touched.deviceToken}
        />
        <FormCaption>Device ID</FormCaption>
        <Input
          placeholder="Device ID"
          name="clientSecret"
          showCopyIcon={true}
          copyText="Device ID copied to clipboard!"
          disabled={true}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.id || 'Device ID not found'}
          error={errors && errors.clientSecret}
          touched={touched && touched.clientSecret}
        />
        <FormCaption>Device Model</FormCaption>
        <Input
          className="f-device-settings__form-input"
          placeholder="Device Model"
          name="deviceModel"
          disabled={true}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.deviceModel}
          error={errors && errors.deviceModel}
          touched={touched && touched.deviceModel}
        />
        <FormCaption>Device Name</FormCaption>
        <Input
          placeholder="Device Name"
          name="deviceName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.deviceName}
          error={errors && errors.deviceName}
          touched={touched && touched.deviceName}
        />
        <FormCaption>Device Description</FormCaption>
        <Input
          className="f-device-settings__form-input"
          placeholder="Device Description"
          name="deviceDescription"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.deviceDescription}
          error={errors && errors.deviceDescription}
          touched={touched && touched.deviceDescription}
        />
        <FormCaption>Device Location</FormCaption>
        <Input
          className="f-device-settings__form-input"
          placeholder="Device Location"
          name="location"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.location}
          error={errors && errors.location}
          touched={touched && touched.location}
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
              title={`Are you sure delete device?`}
              onConfirm={onClickDeviceDeleteConfirm}
              hide={hide}
              isOpen={isOpen}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export const DeviceSettingsForm: FunctionComponent<IDeviceSettingsFormProps> = ({
  onSubmit,
  initialValues,
  loading,
  onClickDeviceDelete
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || DeviceSettingsFormDefaultState}
      validationSchema={DeviceSettingsFormValidationSchema}
      component={formikProps => (
        <DeviceSettingsFormBase {...formikProps} loading={loading} onClickDeviceDelete={onClickDeviceDelete} />
      )}
    />
  );
};

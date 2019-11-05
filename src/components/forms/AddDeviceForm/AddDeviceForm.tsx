import React, { FunctionComponent, useEffect } from 'react';
import { Formik } from 'formik';
import {
  IAddDeviceFormBaseProps,
  AddDeviceFormDefaultState,
  AddDeviceFormValidationSchema,
  IAddDeviceFormProps
} from './definitions';
import { Input, Select } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import './AddDeviceForm.scss';
import isNil from 'ramda/es/isNil';
import { ValueType } from 'react-select/src/types';
import { IBrandOption, IModelOption, getDeviceBrandOptions, getDeviceModelOptions } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { getDeviceModels, getDeviceBrands } from '../../../store/project/actions';

const AddDeviceFormBase: FunctionComponent<IAddDeviceFormBaseProps> = ({
  values,
  handleSubmit,
  handleChange,
  errors,
  touched,
  handleBlur,
  setFieldValue
}) => {
  const { deviceBrands, deviceModels, loading } = useSelector((state: AppState) => state.project);
  const reduxDispatch = useDispatch();

  const brandsOptions = getDeviceBrandOptions(deviceBrands);
  const modelsOptions = getDeviceModelOptions(deviceModels);

  const onChangeBrand = (option: ValueType<any>): void => {
    setFieldValue('deviceModel', undefined);

    if (!option) {
      return setFieldValue('deviceBrand', undefined);
    }

    setFieldValue('deviceBrand', option.value);
    reduxDispatch(getDeviceModels(option.value));
  };

  const onChangeModel = (option: ValueType<any>): void => {
    if (option) {
      setFieldValue('deviceModel', option.value);
    } else {
      setFieldValue('deviceModel', undefined);
    }
  };

  return (
    <form className="f-add-device__form" onSubmit={handleSubmit}>
      <div className="f-add-device__form-content">
        <h2 className="h1 f-add-device__form-title">Add Device</h2>
        <Select
          placeholder="Select Brand"
          name="deviceBrand"
          options={brandsOptions}
          isSearchable={true}
          onChange={onChangeBrand}
          isClearable={true}
          isDisabled={loading && loading.brands}
          isLoading={loading && loading.brands}
          value={brandsOptions && brandsOptions.filter(({ value }) => value === values.deviceBrand)}
          className={'f-add-device__form-dropdown'}
          error={errors && errors.deviceBrand}
          touched={touched && touched.deviceBrand}
        />
        <Select
          placeholder="Select Model"
          name="deviceModel"
          options={getDeviceModelOptions(deviceModels)}
          isSearchable={true}
          onChange={onChangeModel}
          isClearable={true}
          isLoading={loading && loading.models}
          isDisabled={isNil(values.deviceBrand)}
          value={modelsOptions && modelsOptions.filter(({ value }) => value === values.deviceModel)}
          className={'f-add-device__form-dropdown'}
          error={errors && errors.deviceModel}
          touched={touched && touched.deviceModel}
        />
        <Input
          placeholder="Device Name"
          name="deviceName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.deviceName}
          error={errors && errors.deviceName}
          touched={touched && touched.deviceName}
        />
        <Input
          className="f-add-device__form-input"
          placeholder="Device Description"
          name="deviceDescription"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.deviceDescription}
          error={errors && errors.deviceDescription}
          touched={touched && touched.deviceDescription}
        />
        <Input
          placeholder="Device Location"
          name="location"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.location}
          error={errors && errors.location}
          touched={touched && touched.location}
        />
        {loading && loading.addDevice ? (
          <div className="f-add-device__form-loader">
            <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} />
          </div>
        ) : (
          <Button text="Add Device" primary className="f-add-device__form-action" type="submit" />
        )}
      </div>
    </form>
  );
};

export const AddDeviceForm: FunctionComponent<IAddDeviceFormProps> = ({
  onSubmit,
  initialValues,
  disableValidation
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || AddDeviceFormDefaultState}
      validationSchema={!disableValidation && AddDeviceFormValidationSchema}
      component={formikProps => <AddDeviceFormBase {...formikProps} />}
    />
  );
};

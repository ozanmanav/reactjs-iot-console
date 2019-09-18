import React, { FunctionComponent, useEffect, ChangeEvent } from 'react';
import { Formik } from 'formik';
import { IAddDeviceFormBaseProps, AddDeviceFormDefaultState, AddDeviceFormValidationSchema, IAddDeviceFormProps } from './definitions';
import { Input, Select, ISelectOption } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import './AddDeviceForm.scss';
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';

const AddDeviceFormBase: FunctionComponent<
    IAddDeviceFormBaseProps & {
        brandsOptions?: ISelectOption[];
        getDeviceModels?: (brand: string) => void;
        modelsOptions?: ISelectOption[];
    }
> = ({ brandsOptions, modelsOptions, getDeviceModels, ...formikProps }) => {
    const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading, setFieldValue } = formikProps;

    const onChangeBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (getDeviceModels) {
            getDeviceModels(e.target.value);
        }
        setFieldValue('deviceBrand', e.target.value);
    };

    return (
        <form className="f-add-device__form" onSubmit={handleSubmit}>
            <div className="f-add-device__form-content">
                <h2 className="h1 f-add-device__form-title">Add Device</h2>
                <Select
                    options={brandsOptions || []}
                    placeholder="Device Brand"
                    value={values.deviceBrand}
                    name="deviceBrand"
                    onBlur={handleBlur}
                    onChange={onChangeBrand}
                    error={errors && errors.deviceBrand}
                    touched={touched && touched.deviceBrand}
                />
                <Select
                    options={modelsOptions || []}
                    placeholder="Device Model"
                    value={values.deviceModel}
                    name="deviceModel"
                    onBlur={handleBlur}
                    onChange={handleChange}
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
                {loading ? (
                    <div className="f-add-device__form-loader">
                        <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={loading} />
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
    loading,
    brandsOptions,
    getDeviceModels,
    modelsOptions,
}) => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues || AddDeviceFormDefaultState}
            validationSchema={AddDeviceFormValidationSchema}
            component={(formikProps) => (
                <AddDeviceFormBase
                    {...formikProps}
                    loading={loading}
                    brandsOptions={brandsOptions}
                    getDeviceModels={getDeviceModels}
                    modelsOptions={modelsOptions}
                />
            )}
        />
    );
};

import React, { FunctionComponent, useEffect, ChangeEvent } from 'react';
import { Formik } from 'formik';
import { IAddDeviceFormBaseProps, AddDeviceFormDefaultState, AddDeviceFormValidationSchema, IAddDeviceFormProps } from './definitions';
import { Input, Select, ISelectOption } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import './AddDeviceForm.scss';
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';
import { LocalAutocomplete, ILocalAutocompleteOption } from '../../ui/inputs/autocomponents';
import { IDropdownOption } from '../../../utils';
import { FormCaption } from '../FormsUI';

const AddDeviceFormBase: FunctionComponent<
    IAddDeviceFormBaseProps & {
        brandsOptions?: IDropdownOption[];
        getDeviceModels?: (brand: string) => void;
        modelsOptions?: IDropdownOption[];
    }
> = ({ brandsOptions = [], modelsOptions, getDeviceModels, ...formikProps }) => {
    const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading, setFieldValue } = formikProps;

    const onChangeBrand = (e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
        setFieldValue('deviceModel', undefined);
        const brand = (data.value && data.value.toString()) || '';
        if (getDeviceModels) {
            getDeviceModels(brand);
        }
        setFieldValue('deviceBrand', brand);
    };

    const onChangeModel = (e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
        const model = (data.value && data.value.toString()) || '';
        setFieldValue('deviceModel', model);
    };

    return (
        <form className="f-add-device__form" onSubmit={handleSubmit}>
            <div className="f-add-device__form-content">
                <h2 className="h1 f-add-device__form-title">Add Device</h2>
                <Dropdown
                    placeholder="Select Brand"
                    search
                    selection
                    clearable
                    fluid
                    name="deviceBrand"
                    loading={loading && loading.brands}
                    value={values.deviceBrand}
                    options={brandsOptions || []}
                    className={'f-add-device__form-dropdown'}
                    onChange={onChangeBrand}
                />
                <Dropdown
                    placeholder="Select Model"
                    search
                    selection
                    clearable
                    name="deviceModel"
                    disabled={loading && loading.models}
                    loading={loading && loading.models}
                    value={values.deviceModel}
                    options={modelsOptions || []}
                    className={'f-add-device__form-dropdown'}
                    onChange={onChangeModel}
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

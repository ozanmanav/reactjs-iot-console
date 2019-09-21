import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { ISelectOption } from '../../ui';
import { IProjectLoadingState } from '../../../store/project/types';
import { IBrandOption, IModelOption } from '../../../utils';

export const AddDeviceFormDefaultState = {
    deviceBrand: undefined,
    deviceModel: undefined,
    deviceName: '',
    deviceDescription: '',
    location: '',
    loading: false,
};

export interface IAddDeviceFormState {
    deviceBrand?: string;
    deviceModel?: string;
    deviceName: string;
    deviceDescription: string;
    location: string;
    loading?: boolean;
}

export interface IAddDeviceFormBaseProps extends FormikProps<IAddDeviceFormState> {
    loading?: IProjectLoadingState;
}

export interface IAddDeviceFormProps {
    loading?: IProjectLoadingState;
    onSubmit: (state: IAddDeviceFormState) => void;
    brandsOptions?: IBrandOption[];
    initialValues?: IAddDeviceFormState;
    getDeviceModels?: (brand: string) => void;
    modelsOptions?: IModelOption[];
}

// Validation Schema
export const AddDeviceFormValidationSchema = Yup.object().shape({
    deviceBrand: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
    deviceModel: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
    deviceName: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
    deviceDescription: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
    location: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
});

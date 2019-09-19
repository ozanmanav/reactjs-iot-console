import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { ISelectOption } from '../../ui';
import { ILocalAutocompleteOption } from '../../ui/inputs/autocomponents';
import { IDropdownOption } from '../../../utils';
import { IProjectLoadingState } from '../../../store/project/types';

export const AddDeviceFormDefaultState = {
    deviceBrand: '',
    deviceModel: '',
    deviceName: '',
    deviceDescription: '',
    location: '',
    loading: false,
};

export interface IAddDeviceFormState {
    deviceBrand: string;
    deviceModel: string;
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
    brandsOptions?: IDropdownOption[];
    initialValues?: IAddDeviceFormState;
    getDeviceModels?: (brand: string) => void;
    modelsOptions?: IDropdownOption[];
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

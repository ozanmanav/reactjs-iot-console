import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { IProjectLoadingState } from '../../../store/project/types';
import { IBrandOption, IModelOption } from '../../../utils';

export const AddDeviceFormDefaultState = {
  deviceBrand: undefined,
  deviceModel: undefined,
  deviceName: '',
  deviceDescription: '',
  location: '',
  loading: false,
  redirectToProject: true,
  fetchAfterAdd: false
};

export interface IAddDeviceFormState {
  deviceBrand?: string;
  deviceModel?: string;
  deviceName: string;
  deviceDescription: string;
  location: string;
  loading?: boolean;
  redirectToProject?: boolean;
  fetchAfterAdd?: boolean;
}

export interface IAddDeviceFormBaseProps extends FormikProps<IAddDeviceFormState> {}

export interface IAddDeviceFormProps {
  disableValidation?: boolean;
  onSubmit: (state: IAddDeviceFormState) => void;
  initialValues?: IAddDeviceFormState;
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
    .required(VALIDATION_ERRORS.required)
});

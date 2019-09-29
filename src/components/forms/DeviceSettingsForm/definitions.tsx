import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const DeviceSettingsFormDefaultState = {
  deviceToken: '',
  clientSecret: '',
  name: '',
  description: '',
  location: '',
  model: '',
  id: '',
  loading: false
};

export interface IDeviceSettingsFormDefaultState {
  deviceToken: string;
  clientSecret: string;
  name: string;
  description: string;
  location: string;
  model: string;
  id?: string;
  loading?: boolean;
}

export interface IDeviceSettingsFormBaseProps extends FormikProps<IDeviceSettingsFormDefaultState> {
  loading?: boolean;
  onClickDeviceDelete: () => void;
}

export interface IDeviceSettingsFormProps {
  loading?: boolean;
  onClickDeviceDelete: () => void;
  onSubmit: (state: IDeviceSettingsFormDefaultState) => void;
  initialValues?: IDeviceSettingsFormDefaultState;
}

// Validation Schema
export const DeviceSettingsFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required),
  description: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

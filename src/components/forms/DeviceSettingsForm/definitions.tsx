import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const DeviceSettingsFormDefaultState = {
  deviceToken: '',
  clientSecret: '',
  deviceName: '',
  deviceDescription: '',
  location: '',
  deviceModel: '',
  id: '',
  loading: false
};

export interface IDeviceSettingsFormDefaultState {
  deviceToken: string;
  clientSecret: string;
  deviceName: string;
  deviceDescription: string;
  location: string;
  deviceModel: string;
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

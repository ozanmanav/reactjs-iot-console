import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { IUser } from '../../../store/auth/types';

export const UserProfileFormDefaultState = {
  id: '',
  loading: false,
  firstname: '',
  lastname: '',
  profilePhoto: '',
  accountProperties: {},
  accountTypeImage: {},
  timezone: {},
  email: '',
  deviceLimit: ''
};

export interface IUserProfileFormDefaultState extends IUser {
  id?: string;
  loading?: boolean;
  location?: string;
  deviceLimit?: string;
}

export interface IUserProfileFormBaseProps extends FormikProps<IUserProfileFormDefaultState> {
  loading?: boolean;
}

export interface IUserProfileFormProps {
  loading?: boolean;
  onSubmit: (state: IUserProfileFormDefaultState) => void;
  initialValues?: IUserProfileFormDefaultState;
}

// Validation Schema
export const UserProfileFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required),
  location: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

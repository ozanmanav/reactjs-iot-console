import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const LoginFormDefaultState = {
  email: '',
  password: '',
  loading: false
};

export interface ILoginFormDefaultState {
  email: string;
  password: string;
  loading?: boolean;
}

export interface ILoginFormBaseProps extends FormikProps<ILoginFormDefaultState> {
  loading?: boolean;
}

export interface ILoginFormProps {
  loading?: boolean;
  onSubmit: (state: ILoginFormDefaultState) => void;
  initialValues?: ILoginFormDefaultState;
}

// Validation Schema
export const LoginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required),
  password: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

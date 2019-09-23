import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const SignUpFormDefaultState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export interface ISignUpFormDefaultState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignUpFormProps {
  onSubmit: (state: ISignUpFormDefaultState) => void;
  initialValues?: ISignUpFormDefaultState;
}

// Validation Schema
export const SignUpFormValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required),
  lastname: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required),
  email: Yup.string()
    .trim()
    .email()
    .required(VALIDATION_ERRORS.required),
  password: Yup.string()
    .trim()
    .min(6)
    .required(VALIDATION_ERRORS.required),
  confirmPassword: Yup.string()
    .required(VALIDATION_ERRORS.required)
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

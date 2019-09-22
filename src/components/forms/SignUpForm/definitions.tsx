import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const SignUpFormDefaultState = {
  email: '',
  password: ''
};

export interface ISignUpFormDefaultState {
  email: string;
  password: string;
}

export interface ISignUpFormProps {
  onSubmit: (state: ISignUpFormDefaultState) => void;
  initialValues?: ISignUpFormDefaultState;
}

// Validation Schema
export const SignUpFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email()
    .required(VALIDATION_ERRORS.required),
  password: Yup.string()
    .trim()
    .min(6)
    .required(VALIDATION_ERRORS.required)
});

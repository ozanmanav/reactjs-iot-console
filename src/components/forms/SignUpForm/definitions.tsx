import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const SignUpFormDefaultState = {
    email: '',
    password: '',
};

export interface ISignUpFormDefaultState {
    email: string;
    password: string;
}

export interface ISignUpFormBaseProps extends FormikProps<ISignUpFormDefaultState> {}

export interface ISignUpFormProps {
    onSubmit: (state: ISignUpFormDefaultState) => void;
    initialValues?: ISignUpFormDefaultState;
}

// Validation Schema
export const SignUpFormValidationSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
    password: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
});

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const CreateProjectFormDefaultState = {
    name: '',
    description: '',
    loading: false,
};

export interface ICreateProjectFormDefaultState {
    name: string;
    description: string;
    loading?: boolean;
}

export interface ICreateProjectFormBaseProps extends FormikProps<ICreateProjectFormDefaultState> {
    loading?: boolean;
}

export interface ICreateProjectFormProps {
    loading?: boolean;
    onSubmit: (state: ICreateProjectFormDefaultState) => void;
    initialValues?: ICreateProjectFormDefaultState;
}

// Validation Schema
export const CreateProjectFormValidationSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
    description: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
});

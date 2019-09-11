import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const ProjectSettingsFormDefaultState = {
    name: '',
    description: '',
    deviceToken: '',
    loading: false,
};

export interface IProjectSettingsFormDefaultState {
    name: string;
    description: string;
    deviceToken?: string;
    loading?: boolean;
}

export interface IProjectSettingsFormBaseProps extends FormikProps<IProjectSettingsFormDefaultState> {
    loading?: boolean;
}

export interface IProjectSettingsFormProps {
    loading?: boolean;
    onSubmit: (state: IProjectSettingsFormDefaultState) => void;
    initialValues?: IProjectSettingsFormDefaultState;
}

// Validation Schema
export const ProjectSettingsFormValidationSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
    description: Yup.string()
        .trim()
        .required(VALIDATION_ERRORS.required),
});

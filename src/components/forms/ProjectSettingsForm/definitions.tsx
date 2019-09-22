import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const ProjectSettingsFormDefaultState = {
  name: '',
  description: '',
  id: '',
  loading: false
};

export interface IProjectSettingsFormDefaultState {
  name: string;
  description: string;
  id?: string;
  loading?: boolean;
}

export interface IProjectSettingsFormBaseProps extends FormikProps<IProjectSettingsFormDefaultState> {
  loading?: boolean;
  onClickProjectDelete: () => void;
}

export interface IProjectSettingsFormProps {
  onClickProjectDelete: () => void;
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
    .required(VALIDATION_ERRORS.required)
});

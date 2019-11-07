import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';

export const CreateProjectFormState = {
  name: '',
  description: '',
  redirectToProject: true,
  fetchAfterCreate: false,
  loading: false
};

export interface ICreateProjectFormState {
  name: string;
  description: string;
  redirectToProject?: boolean;
  fetchAfterCreate?: boolean;
  loading?: boolean;
}

export interface ICreateProjectFormBaseProps extends FormikProps<ICreateProjectFormState> {
  loading?: boolean;
}

export interface ICreateProjectFormProps {
  loading?: boolean;
  onSubmit: (state: ICreateProjectFormState) => void;
  initialValues?: ICreateProjectFormState;
}

// Validation Schema
export const CreateProjectFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required),
  description: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

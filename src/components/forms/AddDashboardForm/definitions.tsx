import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { IProjectLoadingState } from '../../../store/project/types';

export const AddDashboardFormDefaultState = {
  name: ''
};

export interface IAddDashboardFormState {
  name: string;
}

export interface IAddDashboardFormBaseProps extends FormikProps<IAddDashboardFormState> {
  loading?: boolean;
}

export interface IAddDashboardFormProps {
  onSubmit: (state: IAddDashboardFormState) => void;
  initialValues?: IAddDashboardFormState;
}

// Validation Schema
export const AddDashboardFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

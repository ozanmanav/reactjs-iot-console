import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { IProjectLoadingState } from '../../../store/project/types';

export const AddChartFormDefaultState = {
  deviceName: ''
};

export interface IAddChartFormState {
  deviceName: string;
}

export interface IAddChartFormBaseProps extends FormikProps<IAddChartFormState> {
  loading?: IProjectLoadingState;
}

export interface IAddChartFormProps {
  deviceEntities?: any;
  loading?: IProjectLoadingState;
  onSubmit: (state: IAddChartFormState) => void;
  initialValues?: IAddChartFormState;
}

// Validation Schema
export const AddChartFormValidationSchema = Yup.object().shape({
  deviceName: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

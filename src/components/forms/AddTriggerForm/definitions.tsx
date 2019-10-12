import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { IProjectLoadingState } from '../../../store/project/types';
import { ISelectEntity } from '../../ui/cards';
import { ITriggerTypeOption } from '../../../utils';

export const AddTriggerFormDefaultState = {
  name: '',
  triggerType: '',
  elements: []
};

export interface IAddTriggerFormState {
  name: string;
  triggerType: string;
  elements: ISelectEntity[];
}

export interface IAddTriggerFormBaseProps extends FormikProps<IAddTriggerFormState> {
  loading?: IProjectLoadingState;
}

export interface IAddTriggerFormProps {
  deviceEntities?: any;
  loading?: IProjectLoadingState;
  triggerTypeOptions?: ITriggerTypeOption[];
  onSubmit: (state: IAddTriggerFormState) => void;
  initialValues?: IAddTriggerFormState;
}

// Validation Schema
export const AddTriggerFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

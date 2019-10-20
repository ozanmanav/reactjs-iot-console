import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { VALIDATION_ERRORS } from '../../../config';
import { IProjectLoadingState } from '../../../store/project/types';
import { ITriggerSelectEntity } from '../../ui/cards';
import { ITriggerTypeOption, ITriggerIntegrationOption, ITriggerIntervalOption } from '../../../utils';

export const AddTriggerFormDefaultState = {
  name: '',
  triggerType: '',
  integration: '',
  period: '',
  integrationWebhook: '',
  thresholds: []
};

export interface IAddTriggerFormState {
  name: string;
  triggerType: string;
  integration: string;
  period: string;
  integrationWebhook: string;
  thresholds: ITriggerSelectEntity[];
  deviceEntities?: any;
  triggerTypeOptions?: ITriggerTypeOption[];
  triggerIntegrationOptions?: ITriggerIntegrationOption[];
  triggerIntervalOptions?: ITriggerIntervalOption[];
}

export interface IAddTriggerFormBaseProps extends FormikProps<IAddTriggerFormState> {
  loading?: IProjectLoadingState;
}

export interface IAddTriggerFormProps {
  deviceEntities?: any;
  loading?: IProjectLoadingState;
  triggerTypeOptions?: ITriggerTypeOption[];
  triggerIntegrationOptions?: ITriggerIntegrationOption[];
  triggerIntervalOptions?: ITriggerIntervalOption[];
  onSubmit: (state: IAddTriggerFormState) => void;
  initialValues?: IAddTriggerFormState;
}

// Validation Schema
export const AddTriggerFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required),
  triggerType: Yup.string()
    .trim()
    .required(VALIDATION_ERRORS.required)
});

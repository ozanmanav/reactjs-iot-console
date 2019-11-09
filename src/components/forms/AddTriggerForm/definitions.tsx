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
  interval: '',
  phoneCode: '',
  integrationWebhook: '',
  thresholds: []
};

export interface IAddTriggerFormState {
  name: string;
  triggerType: string;
  integration: string;
  interval: string;
  integrationWebhook: string;
  phoneCode: string;
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
    .required(VALIDATION_ERRORS.required),
  integrationWebhook: Yup.string()
    .when('integration', {
      is: 'E-mail',
      then: Yup.string()
        .email('Please use a valid email address.')
        .required('Email address is required.')
    })
    .when('integration', {
      is: 'Slack',
      then: Yup.string().required('Webhook URL is required.')
    })
    .when('integration', {
      is: 'SMS',
      then: Yup.string()
        .required('Phone Number is required.')
        .max(10, 'Phone Number can be up to 10 characters.')
    }),
  phoneCode: Yup.string().when('integration', {
    is: 'SMS',
    then: Yup.string().required('Phone Code is required.')
  })
});

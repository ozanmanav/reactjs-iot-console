import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import {
  IAddTriggerFormBaseProps,
  AddTriggerFormDefaultState,
  AddTriggerFormValidationSchema,
  IAddTriggerFormProps
} from './definitions';
import { Input, Select } from '../../ui';
import { Button } from '../../ui/buttons';
import './AddTriggerForm.scss';
import { FormCaption } from '../FormsUI';
import { PeriodicTriggerEntityCard, AlertTriggerEntityCard, ITriggerSelectEntity } from '../../ui/cards';
import { ValueType } from 'react-select/src/types';
import { ITriggerTypeOption, ITriggerIntegrationOption, ITriggerIntervalOption } from '../../../utils';

const AddTriggerFormBase: FunctionComponent<
  IAddTriggerFormBaseProps & {
    deviceEntities?: any;
    triggerTypeOptions?: ITriggerTypeOption[];
    triggerIntegrationOptions?: ITriggerIntegrationOption[];
    triggerIntervalOptions?: ITriggerIntervalOption[];
  }
> = ({ deviceEntities, triggerTypeOptions, triggerIntegrationOptions, triggerIntervalOptions, ...formikProps }) => {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur, setFieldValue, loading } = formikProps;

  const addEntity = (selectedEntity: ITriggerSelectEntity) => {
    let updatedThresholds = values.thresholds;
    if (values.thresholds.find((item: ITriggerSelectEntity) => item.key === selectedEntity.key)) {
      updatedThresholds = [
        ...values.thresholds.filter((item: ITriggerSelectEntity) => item.key !== selectedEntity.key),
        selectedEntity
      ];
    } else {
      updatedThresholds = [...values.thresholds, selectedEntity];
    }

    setFieldValue('thresholds', updatedThresholds);
  };

  const removeEntity = (key: string) => {
    setFieldValue('thresholds', values.thresholds.filter((item: ITriggerSelectEntity) => item.key !== key));
  };

  const onChangeTriggerType = (option: ValueType<any>): void => {
    if (option) {
      setFieldValue('thresholds', []);
      setFieldValue('triggerType', option.label);
    }
  };

  const onChangeTriggerIntegration = (option: ValueType<any>): void => {
    if (option) {
      setFieldValue('integration', option.label);
    }
  };

  const onChangeTriggerInterval = (option: ValueType<any>): void => {
    if (option) {
      setFieldValue('period', option.label);
    }
  };
  return (
    <form className="f-add-trigger__form" onSubmit={handleSubmit}>
      <div className="f-add-trigger__form-content">
        <h2 className="h1 f-add-trigger__form-title">Add Trigger</h2>
        <div className="f-add-trigger__form-desc">Create a trigger to be notified.</div>
        <Input
          placeholder="Enter Trigger Name"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          error={errors && errors.name}
          touched={touched && touched.name}
        />
        <Select
          placeholder="Select Trigger Type"
          name="triggerType"
          options={triggerTypeOptions}
          isSearchable={true}
          onChange={onChangeTriggerType}
          isDisabled={loading && loading.brands}
          isLoading={loading && loading.brands}
          value={triggerTypeOptions && triggerTypeOptions.filter(({ label }) => label === values.triggerType)}
          className={'f-add-trigger__form-dropdown'}
          error={errors && errors.triggerType}
          touched={touched && touched.triggerType}
        />

        {values.triggerType === 'Periodic' && (
          <Select
            placeholder="Select Period"
            name="period"
            options={triggerIntervalOptions}
            isSearchable={true}
            onChange={onChangeTriggerInterval}
            value={triggerIntervalOptions && triggerIntervalOptions.filter(({ label }) => label === values.period)}
            className={'f-add-trigger__form-dropdown'}
            error={errors && errors.period}
            touched={touched && touched.period}
          />
        )}

        {values.triggerType !== '' && deviceEntities && deviceEntities.Entities && (
          <>
            <FormCaption>SELECT ENTITY / ENTITIES</FormCaption>
            <div className="row">
              {deviceEntities.Entities.map((entityName: string) => (
                <div className="col-6" key={entityName}>
                  {values.triggerType === 'Periodic' && (
                    <PeriodicTriggerEntityCard
                      entityName={entityName}
                      addEntity={addEntity}
                      removeEntity={removeEntity}
                    />
                  )}

                  {values.triggerType === 'Alert' && (
                    <AlertTriggerEntityCard entityName={entityName} addEntity={addEntity} removeEntity={removeEntity} />
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <Select
          placeholder="Select Integration"
          name="integration"
          menuPlacement="top"
          options={triggerIntegrationOptions}
          isSearchable={true}
          onChange={onChangeTriggerIntegration}
          value={
            triggerIntegrationOptions && triggerIntegrationOptions.filter(({ label }) => label === values.integration)
          }
          className={'f-add-trigger__form-dropdown'}
          error={errors && errors.integration}
          touched={touched && touched.integration}
        />
        {values.integration !== '' && (
          <Input
            placeholder="Integration Webhook URL"
            name="integrationWebhook"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.integrationWebhook}
            error={errors && errors.integrationWebhook}
            touched={touched && touched.integrationWebhook}
          />
        )}
        <br />

        <Button
          text="Add Trigger"
          primary
          className="f-add-trigger__form-action"
          loading={loading && loading.addTrigger}
          type="submit"
        />
      </div>
    </form>
  );
};

export const AddTriggerForm: FunctionComponent<IAddTriggerFormProps> = ({
  onSubmit,
  initialValues,
  loading,
  deviceEntities,
  triggerTypeOptions,
  triggerIntegrationOptions,
  triggerIntervalOptions
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || AddTriggerFormDefaultState}
      validationSchema={AddTriggerFormValidationSchema}
      component={formikProps => (
        <AddTriggerFormBase
          {...formikProps}
          loading={loading}
          deviceEntities={deviceEntities}
          triggerTypeOptions={triggerTypeOptions}
          triggerIntegrationOptions={triggerIntegrationOptions}
          triggerIntervalOptions={triggerIntervalOptions}
        />
      )}
    />
  );
};

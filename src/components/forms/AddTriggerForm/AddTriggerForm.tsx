import React, { FunctionComponent, useState } from 'react';
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
import { EntityCard, ISelectEntity, PeriodicTriggerEntityCard } from '../../ui/cards';
import { ValueType } from 'react-select/src/types';
import { ITriggerTypeOption } from '../../../utils';

const AddTriggerFormBase: FunctionComponent<
  IAddTriggerFormBaseProps & {
    deviceEntities?: any;
    triggerTypeOptions?: ITriggerTypeOption[];
  }
> = ({ deviceEntities, triggerTypeOptions, ...formikProps }) => {
  const [selectedTriggerType, setSelectedTriggerType] = useState();
  const { values, handleSubmit, handleChange, errors, touched, handleBlur, setFieldValue, loading } = formikProps;

  const addEntity = (selectedEntity: ISelectEntity) => {
    let updatedElements = values.elements;
    if (!values.elements.find((item: ISelectEntity) => item.key === selectedEntity.key)) {
      // Add New Element
      updatedElements = [...values.elements, selectedEntity];
    } else {
      // Update Element
      updatedElements = [
        ...values.elements.filter((item: ISelectEntity) => item.key !== selectedEntity.key),
        selectedEntity
      ];
    }

    setFieldValue('elements', updatedElements);
  };

  const removeEntity = (key: string) => {
    setFieldValue('elements', values.elements.filter((item: ISelectEntity) => item.key !== key));
  };

  const onChangeTriggerType = (option: ValueType<any>): void => {
    if (option) {
      setSelectedTriggerType(option.label);
      setFieldValue('triggerType', option.value);
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
          value={triggerTypeOptions && triggerTypeOptions.filter(({ value }) => value === values.triggerType)}
          className={'f-add-trigger__form-dropdown'}
          error={errors && errors.triggerType}
          touched={touched && touched.triggerType}
        />
        <FormCaption>SELECT ENTITY / ENTITIES</FormCaption>
        <div className="row">
          {deviceEntities &&
            deviceEntities.Entities &&
            deviceEntities.Entities.map((entityName: string) => (
              <div className="col-6">
                {selectedTriggerType === 'Periodic' && (
                  <PeriodicTriggerEntityCard
                    entityName={entityName}
                    addEntity={addEntity}
                    removeEntity={removeEntity}
                  />
                )}
              </div>
            ))}
        </div>

        <br />

        {/* <Button
          text="Add Trigger"
          primary
          className="f-add-trigger__form-action"
          loading={loading && loading.addChart}
          type="submit"
        /> */}
      </div>
    </form>
  );
};

export const AddTriggerForm: FunctionComponent<IAddTriggerFormProps> = ({
  onSubmit,
  initialValues,
  loading,
  deviceEntities,
  triggerTypeOptions
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
        />
      )}
    />
  );
};

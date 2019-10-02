import React, { FunctionComponent, useState } from 'react';
import { Formik } from 'formik';
import {
  IAddChartFormBaseProps,
  AddChartFormDefaultState,
  AddChartFormValidationSchema,
  IAddChartFormProps
} from './definitions';
import { Input, Checkbox } from '../../ui';
import { Button } from '../../ui/buttons';
import './AddChartForm.scss';
import { FormCaption } from '../FormsUI';
import { EntityCard, ISelectEntity } from '../../ui/cards';

const AddChartFormBase: FunctionComponent<
  IAddChartFormBaseProps & {
    deviceEntities?: any;
  }
> = ({ deviceEntities, ...formikProps }) => {
  const [onlyScatter, setOnlyScatter] = useState(false);
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

  const onChangeOnlyScatter = (event: React.FormEvent<HTMLInputElement>) => {
    setOnlyScatter(event.currentTarget.checked);
  };

  return (
    <form className="f-add-chart__form" onSubmit={handleSubmit}>
      <div className="f-add-chart__form-content">
        <h2 className="h1 f-add-chart__form-title">Add Chart</h2>
        <div className="f-add-chart__form-desc">Choose the data to visualize or analyze.</div>
        <Input
          placeholder="Chart Name"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          error={errors && errors.name}
          touched={touched && touched.name}
        />
        <FormCaption>SELECT ENTITY / ENTITIES</FormCaption>
        <Checkbox
          label={'Use Scatter Charts (It can only be used as one type.)'}
          onChangeCapture={onChangeOnlyScatter}
        />

        {deviceEntities &&
          deviceEntities.Entities &&
          deviceEntities.Entities.map((entityName: string) => (
            <EntityCard
              entityName={entityName}
              addEntity={addEntity}
              removeEntity={removeEntity}
              onlyScatter={onlyScatter}
            />
          ))}
        <br />

        <Button
          text="Add Chart"
          primary
          className="f-add-chart__form-action"
          loading={loading && loading.addChart}
          type="submit"
        />
      </div>
    </form>
  );
};

export const AddChartForm: FunctionComponent<IAddChartFormProps> = ({
  onSubmit,
  initialValues,
  loading,
  deviceEntities
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || AddChartFormDefaultState}
      validationSchema={AddChartFormValidationSchema}
      component={formikProps => <AddChartFormBase {...formikProps} loading={loading} deviceEntities={deviceEntities} />}
    />
  );
};

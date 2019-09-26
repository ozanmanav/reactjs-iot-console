import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import {
  IAddChartFormBaseProps,
  AddChartFormDefaultState,
  AddChartFormValidationSchema,
  IAddChartFormProps
} from './definitions';
import { Input } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import './AddChartForm.scss';

const AddChartFormBase: FunctionComponent<
  IAddChartFormBaseProps & {
    deviceEntities?: any;
  }
> = ({ deviceEntities, ...formikProps }) => {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading } = formikProps;
  return (
    <form className="f-add-chart__form" onSubmit={handleSubmit}>
      <div className="f-add-chart__form-content">
        <h2 className="h1 f-add-chart__form-title">Add Chart</h2>
        <Input
          placeholder="Chart Name"
          name="chartName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.deviceName}
          error={errors && errors.deviceName}
          touched={touched && touched.deviceName}
        />
        {JSON.stringify(deviceEntities)}
        <br />
        {loading && loading.addChart ? (
          <div className="f-add-chart__form-loader">
            <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} />
          </div>
        ) : (
          <Button text="Add Chart" primary className="f-add-chart__form-action" type="submit" />
        )}
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

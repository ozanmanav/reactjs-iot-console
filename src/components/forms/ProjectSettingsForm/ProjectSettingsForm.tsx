import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import {
  IProjectSettingsFormBaseProps,
  ProjectSettingsFormDefaultState,
  ProjectSettingsFormValidationSchema,
  IProjectSettingsFormProps
} from './definitions';
import { Input, Icon, useModal } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import './ProjectSettingsForm.scss';
import { FormCaption } from '../FormsUI';
import { ConfirmModal } from '../../modals';

const ProjectSettingsFormBase: FunctionComponent<IProjectSettingsFormBaseProps> = ({
  onClickProjectDelete,
  ...formikProps
}) => {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading } = formikProps;
  const { open, hide, isOpen } = useModal();

  const onClickProjectDeleteConfirm = () => {
    hide();
    onClickProjectDelete();
  };

  return (
    <form className="f-project-settings__form" onSubmit={handleSubmit}>
      <div className="f-project-settings__form-content">
        <FormCaption>Project Name</FormCaption>
        <Input
          placeholder="Project Name"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          error={errors && errors.name}
          touched={touched && touched.name}
        />
        <FormCaption>Project Description</FormCaption>
        <Input
          className="f-project-settings__form-input"
          placeholder="Project Description"
          name="description"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.description}
          error={errors && errors.description}
          touched={touched && touched.description}
        />
        {loading ? (
          <div className="f-project-settings__form-loader">
            <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={loading} />
          </div>
        ) : (
          <div className="f-project-settings__form-action-container">
            <Button text="Save" primary className="f-project-settings__form-action" type="submit" />
            <Icon icon="trash" className="_cursor-pointer" onClick={open} />
            <ConfirmModal
              title="Are you sure delete project?"
              onConfirm={onClickProjectDeleteConfirm}
              hide={hide}
              isOpen={isOpen}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export const ProjectSettingsForm: FunctionComponent<IProjectSettingsFormProps> = ({
  onSubmit,
  initialValues,
  loading,
  onClickProjectDelete
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || ProjectSettingsFormDefaultState}
      validationSchema={ProjectSettingsFormValidationSchema}
      component={formikProps => (
        <ProjectSettingsFormBase {...formikProps} loading={loading} onClickProjectDelete={onClickProjectDelete} />
      )}
    />
  );
};

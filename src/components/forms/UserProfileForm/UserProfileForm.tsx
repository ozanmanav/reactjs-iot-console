import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import {
  IUserProfileFormBaseProps,
  UserProfileFormDefaultState,
  UserProfileFormValidationSchema,
  IUserProfileFormProps
} from './definitions';
import Avatar from 'react-avatar';
import { Input } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import { FormCaption } from '../FormsUI';
import './UserProfileForm.scss';

const UserProfileFormBase: FunctionComponent<IUserProfileFormBaseProps> = ({ ...formikProps }) => {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading } = formikProps;

  return (
    <form className="f-user-profile__form" onSubmit={handleSubmit}>
      <div className="f-user-profile__form-content">
        <div className="f-user-profile__form-content__avatar">
          <Avatar round={true} size="120px" />
        </div>

        <div className="flex flex-column">
          <div className="flex justify-between">
            <div>
              <FormCaption>E-mail</FormCaption>
              <Input
                placeholder="E-mail"
                name="email"
                disabled={true}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={errors && errors.email}
                touched={touched && touched.email}
              />
            </div>
            <div className="col">
              <FormCaption>Location</FormCaption>
              <Input
                placeholder="Location"
                name="location"
                disabled={true}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                error={errors && errors.location}
                touched={touched && touched.location}
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <FormCaption>Device Limit</FormCaption>
              <Input
                placeholder="Device Limit"
                name="deviceLimit"
                disabled={true}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.deviceLimit}
                error={errors && errors.deviceLimit}
                touched={touched && touched.deviceLimit}
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="f-user-profile__form-loader">
            <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={loading} />
          </div>
        ) : (
          <div className="f-user-profile__form-action-container">
            <Button text="Save" primary className="f-user-profile__form-action" type="submit" />
          </div>
        )}
      </div>
    </form>
  );
};

export const UserProfileForm: FunctionComponent<IUserProfileFormProps> = ({ onSubmit, initialValues, loading }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || UserProfileFormDefaultState}
      validationSchema={UserProfileFormValidationSchema}
      component={formikProps => <UserProfileFormBase {...formikProps} loading={loading} />}
    />
  );
};

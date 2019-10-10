import React, { FunctionComponent, useState } from 'react';
import { Formik } from 'formik';
import {
  IUserProfileFormBaseProps,
  UserProfileFormDefaultState,
  UserProfileFormValidationSchema,
  IUserProfileFormProps
} from './definitions';
import Avatar from 'react-avatar';
import { Input, Select } from '../../ui';
import { Button } from '../../ui/buttons';
import { ClipLoader } from 'react-spinners';
import './UserProfileForm.scss';

const UserProfileFormBase: FunctionComponent<IUserProfileFormBaseProps> = ({ ...formikProps }) => {
  const [editModeActive, setEditModeActive] = useState(false);
  const { values, handleSubmit, handleChange, errors, touched, handleBlur, loading } = formikProps;

  const toggleEditMode = () => {
    setEditModeActive(prevEditModeActive => !prevEditModeActive);
  };

  return (
    <form className="f-user-profile__form" onSubmit={handleSubmit}>
      {loading ? (
        <div className="f-user-profile__form-loader">
          <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={loading} />
        </div>
      ) : (
        <div className="f-user-profile__form-action-container">
          {editModeActive ? (
            <>
              <Button text="Cancel" className="f-user-profile__form-action-container-cancel" onClick={toggleEditMode} />
              <Button text="Save" primary className="f-user-profile__form-action-container-action" type="submit" />
            </>
          ) : (
            <Button text="Edit" className="f-user-profile__form-action-container-edit-mode" onClick={toggleEditMode} />
          )}
        </div>
      )}
      <div className="f-user-profile__form-content">
        <div className="f-user-profile__form-content__avatar">
          <Avatar round={true} size="120px" src={values.profilePhoto} />
        </div>

        <div className="flex flex-column">
          <div className="f-user-profile__form-title">{values.firstname}</div>
          <div className="flex justify-between ">
            <div>
              {editModeActive ? (
                <>
                  {' '}
                  <Input
                    placeholder="E-mail"
                    name="email"
                    className="mt-15"
                    marginBottom="none"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    error={errors && errors.email}
                    touched={touched && touched.email}
                  />
                </>
              ) : (
                <div className="f-user-profile__form-value">
                  <div className="f-user-profile__form-caption">E-mail</div>
                  {values.email}
                </div>
              )}
            </div>
            <div className="col">
              {editModeActive ? (
                <>
                  <Input
                    placeholder="Location"
                    name="location"
                    className="mt-15"
                    onBlur={handleBlur}
                    marginBottom="none"
                    onChange={handleChange}
                    value={values.location}
                    error={errors && errors.location}
                    touched={touched && touched.location}
                  />
                </>
              ) : (
                <div className="f-user-profile__form-value location">
                  <div className="f-user-profile__form-caption">Location</div>
                  {values.location}
                </div>
              )}
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="f-user-profile__form-value limit">
                <div className="f-user-profile__form-caption">Device Limit</div>
                {values.accountProperties.deviceLimit} Device - {values.accountProperties.accountType}
              </div>
            </div>
            <div className="col">
              {editModeActive ? (
                <div className="f-user-profile__form-dropdown-container">
                  <Select
                    options={[{ label: 'Europe / Istanbul', value: 'Europe / Istanbul' }]}
                    placeholder="Select Timezone"
                    className="f-user-profile__form-dropdown"
                  />
                </div>
              ) : (
                <div className="f-user-profile__form-value timezone">
                  <div className="f-user-profile__form-caption">Timezone</div>
                  Europe / Istanbul
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="f-user-profile__form-value bottom-value">
        <div className="f-user-profile__form-caption bottom-text">E-MAIL SUBSCRIPTION</div>
        <div className="f-user-profile__form-bottom-text">
          By subscribing our email newsletter, you will be opting to receive updates about new feature releases,
          discounts and promotional codes, security updates, and more. If you're not interested in receiving this
          content, please uncheck the box below to unsubscribe.
        </div>
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

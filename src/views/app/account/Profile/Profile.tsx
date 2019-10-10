import React, { FunctionComponent } from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { saveUserProfile } from '../../../../store/user/actions';
import { IUser } from '../../../../store/auth/types';
import { IUserLoadingState } from '../../../../store/user/types';
import { UserProfileForm } from '../../../../components/forms/UserProfileForm';
import { IUserProfileFormDefaultState } from '../../../../components/forms/UserProfileForm/definitions';

interface ProfileBaseProps {
  saveUserProfile?: (values: IUserProfileFormDefaultState) => void;
  loading?: IUserLoadingState;
  router?: any;
  currentUser?: IUser;
}

export const ProfileBase: FunctionComponent<ProfileBaseProps> = ({ currentUser, saveUserProfile }) => {
  if (!currentUser) {
    return <div>Account Profile</div>;
  }

  const initialValues: IUserProfileFormDefaultState = {
    ...currentUser
  };

  const onSubmit = (values: IUserProfileFormDefaultState): void => {
    if (saveUserProfile) {
      saveUserProfile(values);
    }
  };

  return (
    <div className="b-account-profile">
      <UserProfileForm onSubmit={onSubmit} initialValues={initialValues} />
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  currentUser: state.user.currentUser,
  loading: state.user.loading
});

export const Profile = connect(
  mapStateToProps,
  { saveUserProfile }
)(ProfileBase);

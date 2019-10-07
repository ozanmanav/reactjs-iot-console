import React, { FunctionComponent } from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { deleteDevice, saveDeviceSettings } from '../../../../store/project/actions';
import { IProjectLoadingState, ITriggerResponse, IDevice } from '../../../../store/project/types';
import { DeviceSettingsForm } from '../../../../components/forms';
import { IDeviceSettingsFormDefaultState } from '../../../../components/forms/DeviceSettingsForm/definitions';

interface ProfileBaseProps {
  saveDeviceSettings?: (values: IDeviceSettingsFormDefaultState) => void;
  deleteDevice?: () => void;
  settings?: ITriggerResponse;
  loading?: IProjectLoadingState;
  router?: any;
  currentDevice?: IDevice;
}

export const ProfileBase: FunctionComponent<ProfileBaseProps> = ({
  currentDevice,
  deleteDevice,
  saveDeviceSettings
}) => {
  if (!currentDevice) {
    return <div>Account Profile</div>;
  }

  const initialValues: IDeviceSettingsFormDefaultState = {
    ...currentDevice,
    location: currentDevice.deviceLocation,
    deviceToken: (currentDevice.deviceTokens && currentDevice.deviceTokens.apiToken) || '',
    clientSecret: (currentDevice.deviceTokens && currentDevice.deviceTokens.clientSecret) || ''
  };

  const onSubmit = (values: IDeviceSettingsFormDefaultState): void => {
    if (saveDeviceSettings) {
      saveDeviceSettings(values);
    }
  };

  const onClickProjectDelete = (): void => {
    if (deleteDevice) {
      deleteDevice();
    }
  };

  return (
    <div className="b-account-profile">
      <DeviceSettingsForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        onClickDeviceDelete={onClickProjectDelete}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  currentDevice: state.project.currentDevice,
  loading: state.project.loading
});

export const Profile = connect(
  mapStateToProps,
  { saveDeviceSettings, deleteDevice }
)(ProfileBase);

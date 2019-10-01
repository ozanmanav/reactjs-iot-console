import React, { FunctionComponent } from 'react';
import './DeviceSettings.scss';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { deleteDevice, saveDeviceSettings } from '../../../../store/project/actions';
import { IProjectLoadingState, ITriggerResponse, IDevice } from '../../../../store/project/types';
import { DeviceSettingsForm } from '../../../../components/forms';
import { IDeviceSettingsFormDefaultState } from '../../../../components/forms/DeviceSettingsForm/definitions';

interface DeviceSettingsBaseProps {
  saveDeviceSettings?: (values: IDeviceSettingsFormDefaultState) => void;
  deleteDevice?: () => void;
  settings?: ITriggerResponse;
  loading?: IProjectLoadingState;
  router?: any;
  currentDevice?: IDevice;
}

export const DeviceSettingsBase: FunctionComponent<DeviceSettingsBaseProps> = ({
  currentDevice,
  deleteDevice,
  saveDeviceSettings
}) => {
  if (!currentDevice) {
    return <div>Please select a project</div>;
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
    <div className="b-evice-settings">
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

export const DeviceSettings = connect(
  mapStateToProps,
  { saveDeviceSettings, deleteDevice }
)(DeviceSettingsBase);

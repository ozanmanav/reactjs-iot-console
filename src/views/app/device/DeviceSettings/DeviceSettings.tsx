import React, { FunctionComponent } from 'react';
import './DeviceSettings.scss';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, ITriggerResponse, IDevice } from '../../../../store/project/types';
import { DeviceSettingsForm } from '../../../../components/forms';
import { IDeviceSettingsFormDefaultState } from '../../../../components/forms/DeviceSettingsForm/definitions';

interface DeviceSettingsBaseProps {
  settings?: ITriggerResponse;
  loading?: IProjectLoadingState;
  router?: any;
  currentDevice?: IDevice;
}

export const DeviceSettingsBase: FunctionComponent<DeviceSettingsBaseProps> = ({ currentDevice }) => {
  if (!currentDevice) {
    return <div>Please select a project</div>;
  }

  const initialValues: IDeviceSettingsFormDefaultState = {
    id: currentDevice.id,
    name: currentDevice.deviceName,
    model: currentDevice.deviceModel,
    location: currentDevice.deviceLocation,
    description: currentDevice.deviceDescription,
    deviceToken: (currentDevice.deviceTokens && currentDevice.deviceTokens.apiToken) || '',
    clientSecret: (currentDevice.deviceTokens && currentDevice.deviceTokens.clientSecret) || ''
  };

  return (
    <div className="project-settings">
      <DeviceSettingsForm onSubmit={() => null} initialValues={initialValues} />
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  currentDevice: state.project.currentDevice,
  loading: state.project.loading
});

export const DeviceSettings = connect(mapStateToProps)(DeviceSettingsBase);

import React, { FunctionComponent } from 'react';
import './DeviceSettings.scss';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { deleteDevice } from '../../../../store/project/actions';
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

export const DeviceSettingsBase: FunctionComponent<DeviceSettingsBaseProps> = ({ currentDevice, deleteDevice }) => {
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

  const onClickProjectDelete = (): void => {
    if (deleteDevice) {
      console.log('deletede');
      deleteDevice();
    }
  };

  return (
    <div className="b-evice-settings">
      <DeviceSettingsForm
        onSubmit={() => null}
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
  { deleteDevice }
)(DeviceSettingsBase);

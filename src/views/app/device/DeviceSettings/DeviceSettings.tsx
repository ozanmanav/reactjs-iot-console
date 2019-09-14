import React, { FunctionComponent } from 'react';
import './DeviceSettings.scss';
import { getDeviceSettings } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, ITriggerResponse, IProject, IDevice } from '../../../../store/project/types';
import { DeviceSettingsForm } from '../../../../components/forms';
import { IDeviceSettingsFormDefaultState } from '../../../../components/forms/DeviceSettingsForm/definitions';

interface DeviceSettingsBaseProps {
    getDeviceSettings: typeof getDeviceSettings;
    settings?: ITriggerResponse;
    loading?: IProjectLoadingState;
    router?: any;
    currentDevice?: IDevice;
}

export const DeviceSettingsBase: FunctionComponent<DeviceSettingsBaseProps> = ({ currentDevice, loading }) => {
    if (!currentDevice) {
        return <div>Please select a project</div>;
    }

    let initialValues: IDeviceSettingsFormDefaultState = {
        id: currentDevice.id,
        name: currentDevice.deviceName,
        description: currentDevice.deviceDescription,
        deviceToken: currentDevice.deviceTokens && currentDevice.deviceTokens.apiToken,
        clientSecret: currentDevice.deviceTokens && currentDevice.deviceTokens.clientSecret,
    };

    return (
        <div className="project-settings">
            <DeviceSettingsForm onSubmit={(values) => console.log(values)} initialValues={initialValues} />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    currentDevice: state.project.currentDevice,
    loading: state.project.loading,
});

export const DeviceSettings = connect(
    mapStateToProps,
    { getDeviceSettings }
)(DeviceSettingsBase);

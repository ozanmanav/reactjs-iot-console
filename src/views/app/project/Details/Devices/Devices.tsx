import React, { FunctionComponent, useEffect } from 'react';
import './Devices.scss';
import { getDevices } from '../../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../../store';
import { IDevice, IProjectLoadingState } from '../../../../../store/project/types';
import { DeviceCard } from '../../../../../components/ui/cards';
import AddDeviceIcon from '../../../../../icons/plus-feynlab.png';

interface DevicesBaseProps {
    getDevices: typeof getDevices;
    devices?: IDevice[];
    loading?: IProjectLoadingState;
    router?: any;
}

export const DevicesBase: FunctionComponent<DevicesBaseProps> = ({ devices, getDevices, loading }) => {
    useEffect(() => {
        getDevices();
    }, [getDevices]);

    return (
        <div className="b-project-devices-details">
            <div className="b-project-devices-details__info">
                <div className="b-project-devices-details__title">DEVICE DETAILS </div>
                <div className="b-project-devices-details__add-device">
                    <img src={AddDeviceIcon} alt="logo" className="b-project-devices-details__add-device_icon" />
                    <span>Add Device</span>
                </div>
            </div>
            <div className="b-project-devices">
                {loading && !loading.devices && devices && devices.map((device) => <DeviceCard device={device} />)}
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    devices: state.project.devices,
    loading: state.project.loading,
});

export const Devices = connect(
    mapStateToProps,
    { getDevices }
)(DevicesBase);

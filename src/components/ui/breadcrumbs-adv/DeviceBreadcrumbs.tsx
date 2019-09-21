import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { IDevice } from '../../../store/project/types';

const PureDeviceBreadcrumb: FunctionComponent<{ currentDevice?: IDevice }> = ({ currentDevice }) => {
    return <span>{currentDevice && currentDevice.deviceName}</span>;
};

const mapStateToProps = (state: AppState) => ({
    currentDevice: state.project.currentDevice
});

export default connect(mapStateToProps)(PureDeviceBreadcrumb);

import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { IDevice } from '../../../store/project/types';

const DeviceBreadcrumbBase: FunctionComponent<{ currentDevice?: IDevice }> = ({ currentDevice }) => {
  return <span>{currentDevice && currentDevice.deviceName}</span>;
};

const mapStateToProps = (state: AppState) => ({
  currentDevice: state.project.currentDevice
});

const DeviceBreadcrumbAddChartBase: FunctionComponent = () => {
  return (
    <>
      <DeviceBreadcrumbBase /> Add Chart
    </>
  );
};

const DeviceBreadcrumb = connect(mapStateToProps)(DeviceBreadcrumbBase);
const DeviceBreadcrumbAddChart = connect(mapStateToProps)(DeviceBreadcrumbAddChartBase);

export { DeviceBreadcrumb, DeviceBreadcrumbAddChart };

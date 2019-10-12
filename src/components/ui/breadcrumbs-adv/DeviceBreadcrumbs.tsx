import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { IDevice } from '../../../store/project/types';

const DeviceBreadcrumbBase: FunctionComponent<{ currentDevice?: IDevice }> = ({ currentDevice }) => {
  return <span>{currentDevice && currentDevice.deviceName}</span>;
};

const mapStateToProps = (state: AppState) => ({
  currentDevice: state.project.currentDevice,
  currentChart: state.project.currentChart
});

const DeviceBreadcrumbAddChartBase: FunctionComponent = () => {
  return (
    <>
      <DeviceBreadcrumbBase /> Add Chart
    </>
  );
};

const DeviceBreadcrumbAddTriggerBase: FunctionComponent = () => {
  return (
    <>
      <DeviceBreadcrumbBase /> Add Trigger
    </>
  );
};

const DeviceBreadcrumb = connect(mapStateToProps)(DeviceBreadcrumbBase);
const DeviceBreadcrumbAddChart = connect(mapStateToProps)(DeviceBreadcrumbAddChartBase);
const DeviceBreadcrumbAddTrigger = connect(mapStateToProps)(DeviceBreadcrumbAddTriggerBase);

export { DeviceBreadcrumb, DeviceBreadcrumbAddChart, DeviceBreadcrumbAddTrigger };

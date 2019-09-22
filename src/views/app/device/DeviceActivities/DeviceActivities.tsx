import React, { FunctionComponent, useEffect } from 'react';
import './DeviceActivities.scss';
import { getDeviceActivities } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, IActivity } from '../../../../store/project/types';
import { ActivityList } from '../../../../components/lists/ActivityList';

interface DeviceActivitiesBaseProps {
  getDeviceActivities: typeof getDeviceActivities;
  deviceActivities: IActivity[];
  loading?: IProjectLoadingState;
  router?: any;
}

export const DeviceActivitiesBase: FunctionComponent<DeviceActivitiesBaseProps> = ({
  deviceActivities,
  getDeviceActivities,
  loading
}) => {
  useEffect(() => {
    getDeviceActivities();
  }, [getDeviceActivities]);

  if (deviceActivities && deviceActivities.length < 1) {
    return <div>Device activity not found</div>;
  }
  return <ActivityList activities={deviceActivities} loading={loading && loading.deviceActivities} />;
};

const mapStateToProps = (state: AppState) => ({
  deviceActivities: state.project.deviceActivities || [],
  loading: state.project.loading
});

export const DeviceActivities = connect(
  mapStateToProps,
  { getDeviceActivities }
)(DeviceActivitiesBase);

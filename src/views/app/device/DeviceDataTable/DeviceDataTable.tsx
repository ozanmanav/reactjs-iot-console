import React, { FunctionComponent, useEffect, useCallback } from 'react';
import './DeviceDataTable.scss';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { getDeviceChartsData } from '../../../../store/project/actions';
import { IProjectLoadingState } from '../../../../store/project/types';
import { MDBDataTable } from 'mdbreact';
import { normalizeDataForTable } from '../DeviceChartDetail/utils';
import { Loading } from '../../../../components/ui/loading';

interface DeviceDataTableBaseProps {
  getDeviceChartsData?: typeof getDeviceChartsData;
  deviceChartsData?: any;
  loading?: IProjectLoadingState;
  router?: any;
}

export const DeviceDataTableBase: FunctionComponent<DeviceDataTableBaseProps> = ({
  deviceChartsData,
  loading,
  getDeviceChartsData
}) => {
  const getDeviceChartsDataCallback = useCallback(() => {
    if (getDeviceChartsData) {
      getDeviceChartsData();
    }
  }, [getDeviceChartsData]);

  useEffect(() => {
    if (getDeviceChartsDataCallback) {
      getDeviceChartsDataCallback();
    }
  }, [getDeviceChartsDataCallback]);

  if (loading && loading.deviceChartsData) {
    return <Loading />;
  }

  if (deviceChartsData && deviceChartsData.length < 1 && !loading) {
    return <div>Device data not found</div>;
  }

  return (
    <MDBDataTable
      searching={false}
      className="b-device-data-table"
      hover
      borderless
      responsive
      displayEntries={false}
      data={normalizeDataForTable(deviceChartsData.Data)}
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  deviceChartsData: state.project.deviceChartsData || [],
  loading: state.project.loading
});

export const DeviceDataTable = connect(mapStateToProps)(DeviceDataTableBase);

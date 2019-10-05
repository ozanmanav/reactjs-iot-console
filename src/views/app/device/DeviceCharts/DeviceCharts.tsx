import React, { FunctionComponent, useEffect } from 'react';
import './DeviceCharts.scss';
import { getDevices } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import PlusIcon from '../../../../icons/plus-feynlab.png';
import { IDevice, IProjectLoadingState, IProject, IChart } from '../../../../store/project/types';
// import { DeviceCard } from '../../../../components/ui/cards';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../../../store';
import { DeviceChartCard } from '../../../../components/ui/cards';
import { Loading } from '../../../../components/ui/loading';
import { getSlicedArray } from '../DeviceChartDetail/utils';

interface DevicesBaseProps {
  getDevices: typeof getDevices;
  currentProject?: IProject;
  currentDevice?: IDevice;
  deviceCharts?: IChart[];
  deviceChartsData?: any;
  loading?: IProjectLoadingState;
  router?: any;
}

export const DeviceChartsBase: FunctionComponent<DevicesBaseProps> = ({
  getDevices,
  currentProject,
  currentDevice,
  loading,
  deviceCharts,
  deviceChartsData
}) => {
  useEffect(() => {
    getDevices();
  }, [getDevices]);

  return (
    <div className="b-device-charts">
      <div className="b-device-charts__add-chart-button">
        <NavLink
          to={`/app/projects/${currentProject && currentProject.id}/devices/${currentDevice &&
            currentDevice.id}/add-chart`}
        >
          <img
            src={PlusIcon}
            className="b-device-charts__add-chart-button_icon"
            alt={currentProject && currentProject.id}
          />
          <span>Add Chart</span>
        </NavLink>
      </div>

      <div className="container b-device-charts__charts">
        <div className="row">
          {loading && loading.devices ? (
            <Loading />
          ) : (
            currentProject &&
            currentDevice &&
            deviceCharts &&
            deviceCharts.map((deviceChart: IChart) => (
              <NavLink
                className="col-md-4 col-sm-12 col-xs-12 b-device-chart-detail__devices-card _cursor-pointer"
                to={`/app/projects/${currentProject.id}/devices/${currentDevice.id}/charts/${deviceChart._id}`}
              >
                <DeviceChartCard chart={deviceChart} deviceChartsData={getSlicedArray(deviceChartsData.Data, 6)} />{' '}
              </NavLink>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  router: state.router,
  currentProject: state.project.currentProject,
  currentDevice: state.project.currentDevice,
  deviceCharts: state.project.deviceCharts,
  deviceChartsData: state.project.deviceChartsData,
  loading: state.project.loading
});

export const DeviceCharts = connect(
  mapStateToProps,
  { getDevices }
)(DeviceChartsBase);

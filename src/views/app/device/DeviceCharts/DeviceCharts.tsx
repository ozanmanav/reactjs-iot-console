import React, { FunctionComponent, useEffect } from 'react';
import './DeviceCharts.scss';
import { getDevices } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import PlusIcon from '../../../../icons/plus-feynlab.png';
import { IDevice, IProjectLoadingState, IProject } from '../../../../store/project/types';
// import { DeviceCard } from '../../../../components/ui/cards';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../../../store';

interface DevicesBaseProps {
  getDevices: typeof getDevices;
  currentProject?: IProject;
  currentDevice?: IDevice;
  loading?: IProjectLoadingState;
  router?: any;
}

export const DeviceChartsBase: FunctionComponent<DevicesBaseProps> = ({
  getDevices,
  currentProject,
  currentDevice
}) => {
  useEffect(() => {
    getDevices();
  }, [getDevices]);

  return (
    <div className="b-device-charts-details">
      <div className="b-device-charts-details__info">
        <div className="b-device-charts-details__add-chart">
          <NavLink
            to={`/app/projects/${currentProject && currentProject.id}/devices/${currentDevice &&
              currentDevice.id}/add-chart`}
          >
            <img
              src={PlusIcon}
              className="b-device-charts-details__add-chart_icon"
              alt={currentProject && currentProject.id}
            />
            <span>Add Chart</span>
          </NavLink>
        </div>
      </div>
      <div className="container b-device-charts-details__devices">
        <div className="row">
          {/* {loading &&
            !loading.devices &&
            devices &&
            devices.map(device => (
              <NavLink
                key={device.id}
                to={`/app/projects/${currentProject && currentProject.id}/devices/${device.id}`}
                className="col-md-6 col-sm-12 col-xs-12 b-device-charts-details__devices-card"
              >
                <DeviceCard device={device} />{' '}
              </NavLink>
            ))} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentProject: state.project.currentProject,
  currentDevice: state.project.currentDevice,
  loading: state.project.loading
});

export const DeviceCharts = connect(
  mapStateToProps,
  { getDevices }
)(DeviceChartsBase);

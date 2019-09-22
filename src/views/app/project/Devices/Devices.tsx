import React, { FunctionComponent, useEffect } from 'react';
import './Devices.scss';
import { getDevices } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import AddDeviceIcon from '../../../../icons/plus-feynlab.png';
import { IDevice, IProjectLoadingState, IProject } from '../../../../store/project/types';
import { DeviceCard } from '../../../../components/ui/cards';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../../../store';

interface DevicesBaseProps {
  getDevices: typeof getDevices;
  devices?: IDevice[];
  currentProject?: IProject;
  loading?: IProjectLoadingState;
  router?: any;
}

export const DevicesBase: FunctionComponent<DevicesBaseProps> = ({ devices, getDevices, loading, currentProject }) => {
  useEffect(() => {
    getDevices();
  }, [getDevices]);

  return (
    <div className="b-project-devices-details">
      <div className="b-project-devices-details__info">
        <div className="b-project-devices-details__add-device">
          <NavLink to={`/app/projects/${currentProject && currentProject.id}/add-device`}>
            <img
              src={AddDeviceIcon}
              className="b-project-devices-details__add-device_icon"
              alt={currentProject && currentProject.id}
            />
            <span>Add Device</span>
          </NavLink>
        </div>
      </div>
      <div className="container b-project-devices-details__devices">
        <div className="row">
          {loading &&
            !loading.devices &&
            devices &&
            devices.map(device => (
              <NavLink
                to={`/app/projects/${currentProject && currentProject.id}/devices/${device.id}`}
                className="col-md-6 col-sm-12 col-xs-12 b-project-devices-details__devices-card"
              >
                <DeviceCard device={device} />{' '}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  devices: state.project.devices,
  currentProject: state.project.currentProject,
  loading: state.project.loading
});

export const Devices = connect(
  mapStateToProps,
  { getDevices }
)(DevicesBase);

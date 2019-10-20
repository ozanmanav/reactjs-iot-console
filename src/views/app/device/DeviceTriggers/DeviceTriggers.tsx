import React, { FunctionComponent, useEffect } from 'react';
import './DeviceTriggers.scss';
import { getDeviceTriggers } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, ITriggerResponse, IProject, IDevice } from '../../../../store/project/types';
import { TriggerCard } from '../../../../components/ui/cards';
import { Loading } from '../../../../components/ui/loading';
import { NavLink } from 'react-router-dom';
import PlusIcon from '../../../../icons/plus-feynlab.png';
import groupBy from 'lodash.groupby';

interface DeviceTriggersBaseProps {
  getDeviceTriggers: typeof getDeviceTriggers;
  currentProject?: IProject;
  currentDevice?: IDevice;
  deviceTriggers?: ITriggerResponse;
  loading?: IProjectLoadingState;
}

export const DeviceTriggersBase: FunctionComponent<DeviceTriggersBaseProps> = ({
  deviceTriggers,
  getDeviceTriggers,
  currentProject,
  currentDevice,
  loading
}) => {
  useEffect(() => {
    getDeviceTriggers();
  }, [getDeviceTriggers]);
  console.log(deviceTriggers);
  const dataToShowGrouped = groupBy(deviceTriggers, 'deviceBrandName');
  console.log(dataToShowGrouped);
  return (
    <div className="b-device-triggers-details">
      <div className="b-device-triggers__add-trigger-button">
        <NavLink
          to={`/app/projects/${currentProject && currentProject.id}/devices/${currentDevice &&
            currentDevice.id}/add-trigger`}
        >
          <img
            src={PlusIcon}
            className="b-device-triggers__add-trigger-button_icon"
            alt={currentProject && currentProject.id}
          />
          <span>Add Trigger</span>
        </NavLink>
      </div>

      {loading && loading.deviceTriggers ? (
        <Loading />
      ) : (
        <div className="b-device-triggers-sections">
          {deviceTriggers && (
            <>
              {' '}
              {deviceTriggers && deviceTriggers.alert && deviceTriggers.alert.length > 0 && (
                <>
                  <div className="b-device-triggers-sections-section">
                    <div className="b-device-triggers-sections-section__name">Alert</div>
                  </div>
                  {deviceTriggers.alert.map(trigger => (
                    <TriggerCard trigger={trigger} />
                  ))}
                </>
              )}
              {deviceTriggers && deviceTriggers.periodic && deviceTriggers.periodic.length > 0 && (
                <>
                  <div className="b-device-triggers-sections-section">
                    <div className="b-device-triggers-sections-section__name">Periodic</div>
                  </div>
                  {deviceTriggers.periodic.map(trigger => (
                    <TriggerCard trigger={trigger} />
                  ))}
                </>
              )}{' '}
            </>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentProject: state.project.currentProject,
  currentDevice: state.project.currentDevice,
  deviceTriggers: state.project.deviceTriggers,
  loading: state.project.loading
});

export const DeviceTriggers = connect(
  mapStateToProps,
  { getDeviceTriggers }
)(DeviceTriggersBase);

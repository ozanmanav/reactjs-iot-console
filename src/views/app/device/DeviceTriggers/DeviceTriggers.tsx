import React, { FunctionComponent, useEffect } from 'react';
import './DeviceTriggers.scss';
import { getDeviceTriggers } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, ITriggerResponse } from '../../../../store/project/types';
import { TriggerCard } from '../../../../components/ui/cards';
import { Loading } from '../../../../components/ui/loading';

interface DeviceTriggersBaseProps {
  getDeviceTriggers: typeof getDeviceTriggers;
  triggers?: ITriggerResponse;
  loading?: IProjectLoadingState;
  router?: any;
}

export const DeviceTriggersBase: FunctionComponent<DeviceTriggersBaseProps> = ({
  triggers,
  getDeviceTriggers,
  loading
}) => {
  useEffect(() => {
    getDeviceTriggers();
  }, [getDeviceTriggers]);

  return (
    <div className="b-project-triggers-details">
      <div className="b-project-triggers">
        {loading && loading.deviceTriggers ? (
          <Loading className="b-project-triggers-loader" />
        ) : (
          triggers && triggers.alert && triggers.alert.map(trigger => <TriggerCard trigger={trigger} />)
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  deviceTriggers: state.project.deviceTriggers,
  loading: state.project.loading
});

export const DeviceTriggers = connect(
  mapStateToProps,
  { getDeviceTriggers }
)(DeviceTriggersBase);

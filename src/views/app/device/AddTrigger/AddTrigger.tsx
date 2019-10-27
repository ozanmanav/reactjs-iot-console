import React, { FunctionComponent, useEffect } from 'react';
import './AddTrigger.scss';
import { RouteComponentProps } from 'react-router';
import BreadcrumbsAdv from '../../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { AppState } from '../../../../store';
import { connect } from 'react-redux';
import {
  getDeviceEntities,
  addDeviceTrigger,
  getTriggerTypes,
  getTriggerIntegrations,
  getTriggerIntervals
} from '../../../../store/project/actions';
import { IProjectLoadingState } from '../../../../store/project/types';
import { AddTriggerForm } from '../../../../components/forms/AddTriggerForm/AddTriggerForm';
import { getTriggerTypeOptions, getTriggerIntegrationOptions, getTriggerIntervalOptions } from '../../../../utils';
import { IAddTriggerFormState } from '../../../../components/forms/AddTriggerForm/definitions';

interface AddTriggerBaseProps {
  getDeviceEntities: typeof getDeviceEntities;
  getTriggerTypes: typeof getTriggerTypes;
  getTriggerIntegrations: typeof getTriggerIntegrations;
  getTriggerIntervals: typeof getTriggerIntervals;
  addDeviceTrigger: typeof addDeviceTrigger;
  projectLoading?: IProjectLoadingState;
  deviceEntities: {};
  triggerTypes: [];
  triggerIntegrations: [];
  triggerIntervals: [];
}

export const AddTriggerBase: FunctionComponent<RouteComponentProps & AddTriggerBaseProps> = ({
  projectLoading = undefined,
  deviceEntities,
  getDeviceEntities,
  getTriggerTypes,
  getTriggerIntegrations,
  getTriggerIntervals,
  triggerTypes,
  triggerIntegrations,
  triggerIntervals,
  addDeviceTrigger
}) => {
  useEffect(() => {
    getDeviceEntities();
    getTriggerTypes();
    getTriggerIntegrations();
    getTriggerIntervals();
  }, [getDeviceEntities, getTriggerTypes, getTriggerIntegrations, getTriggerIntervals]);

  const onSubmit = (values: IAddTriggerFormState): void => {
    addDeviceTrigger(values);
  };

  return (
    <div className="b-add-trigger">
      <div className="b-add-trigger__breadcrumb-wrapper">
        <div className="b-add-trigger__breadcrumb-wrapper__present">Projects /</div>
        <BreadcrumbsAdv />
      </div>
      <AddTriggerForm
        onSubmit={onSubmit}
        loading={projectLoading || undefined}
        deviceEntities={deviceEntities}
        triggerTypeOptions={getTriggerTypeOptions(triggerTypes)}
        triggerIntegrationOptions={getTriggerIntegrationOptions(triggerIntegrations)}
        triggerIntervalOptions={getTriggerIntervalOptions(triggerIntervals)}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  projectLoading: state.project.loading,
  deviceEntities: state.project.deviceEntities,
  triggerTypes: state.project.triggerTypes,
  triggerIntegrations: state.project.triggerIntegrations,
  triggerIntervals: state.project.triggerIntervals
});

export const AddTrigger = connect(
  mapStateToProps,
  { getDeviceEntities, addDeviceTrigger, getTriggerTypes, getTriggerIntegrations, getTriggerIntervals }
)(AddTriggerBase);

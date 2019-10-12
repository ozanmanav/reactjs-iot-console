import React, { FunctionComponent, useEffect } from 'react';
import './AddTrigger.scss';
import { RouteComponentProps } from 'react-router';
import BreadcrumbsAdv from '../../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { AppState } from '../../../../store';
import { connect } from 'react-redux';
import {
  getDeviceEntities,
  addDeviceChart,
  getTriggerTypes,
  getTriggerIntegrations
} from '../../../../store/project/actions';
import { IProjectLoadingState } from '../../../../store/project/types';
import { AddTriggerForm } from '../../../../components/forms/AddTriggerForm/AddTriggerForm';
import { getTriggerTypeOptions, getTriggerIntegrationOptions } from '../../../../utils';
import { IAddTriggerFormState } from '../../../../components/forms/AddTriggerForm/definitions';

interface AddTriggerBaseProps {
  getDeviceEntities: typeof getDeviceEntities;
  getTriggerTypes: typeof getTriggerTypes;
  getTriggerIntegrations: typeof getTriggerIntegrations;
  addDeviceChart: typeof addDeviceChart;
  projectLoading?: IProjectLoadingState;
  deviceEntities: {};
  triggerTypes: [];
  triggerIntegrations: [];
}

export const AddTriggerBase: FunctionComponent<RouteComponentProps & AddTriggerBaseProps> = ({
  projectLoading = undefined,
  deviceEntities,
  getDeviceEntities,
  getTriggerTypes,
  addDeviceChart,
  getTriggerIntegrations,
  triggerTypes,
  triggerIntegrations
}) => {
  useEffect(() => {
    getDeviceEntities();
    getTriggerIntegrations();
    getTriggerTypes();
  }, []);

  const onSubmit = (values: IAddTriggerFormState): void => {
    console.log(values);
    // addDeviceChart(values);
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
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  projectLoading: state.project.loading,
  deviceEntities: state.project.deviceEntities,
  triggerTypes: state.project.triggerTypes,
  triggerIntegrations: state.project.triggerIntegrations
});

export const AddTrigger = connect(
  mapStateToProps,
  { getDeviceEntities, addDeviceChart, getTriggerTypes, getTriggerIntegrations }
)(AddTriggerBase);

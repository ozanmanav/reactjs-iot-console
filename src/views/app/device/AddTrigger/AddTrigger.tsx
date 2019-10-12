import React, { FunctionComponent, useEffect } from 'react';
import './AddTrigger.scss';
import { RouteComponentProps } from 'react-router';
import BreadcrumbsAdv from '../../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { AppState } from '../../../../store';
import { connect } from 'react-redux';
import { getDeviceEntities, addDeviceChart, getTriggerTypes } from '../../../../store/project/actions';
import { IProjectLoadingState } from '../../../../store/project/types';
import { IAddChartFormState } from '../../../../components/forms/AddChartForm/definitions';
import { AddTriggerForm } from '../../../../components/forms/AddTriggerForm/AddTriggerForm';
import { getTriggerTypeOptions } from '../../../../utils';

interface AddTriggerBaseProps {
  getDeviceEntities: typeof getDeviceEntities;
  getTriggerTypes: typeof getTriggerTypes;
  addDeviceChart: typeof addDeviceChart;
  projectLoading?: IProjectLoadingState;
  deviceEntities: {};
  triggerTypes: [];
}

export const AddTriggerBase: FunctionComponent<RouteComponentProps & AddTriggerBaseProps> = ({
  projectLoading = undefined,
  deviceEntities,
  getDeviceEntities,
  getTriggerTypes,
  addDeviceChart,
  triggerTypes
}) => {
  useEffect(() => {
    getDeviceEntities();
  }, [getDeviceEntities]);

  useEffect(() => {
    getTriggerTypes();
  }, [getTriggerTypes]);

  const onSubmit = (values: IAddChartFormState): void => {
    addDeviceChart(values);
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
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  projectLoading: state.project.loading,
  deviceEntities: state.project.deviceEntities,
  triggerTypes: state.project.triggerTypes
});

export const AddTrigger = connect(
  mapStateToProps,
  { getDeviceEntities, addDeviceChart, getTriggerTypes }
)(AddTriggerBase);

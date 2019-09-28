import React, { FunctionComponent, useEffect } from 'react';
import './AddChart.scss';
import { RouteComponentProps } from 'react-router';
import { AddChartForm } from '../../../../components/forms/AddChartForm';
import BreadcrumbsAdv from '../../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { AppState } from '../../../../store';
import { connect } from 'react-redux';
import { getDeviceEntities, addDeviceChart } from '../../../../store/project/actions';
import { IProjectLoadingState } from '../../../../store/project/types';
import { IAddChartFormState } from '../../../../components/forms/AddChartForm/definitions';

interface AddChartBaseProps {
  getDeviceEntities: typeof getDeviceEntities;
  addDeviceChart: typeof addDeviceChart;
  projectLoading?: IProjectLoadingState;
  deviceEntities: {};
}

export const AddChartBase: FunctionComponent<RouteComponentProps & AddChartBaseProps> = ({
  projectLoading = undefined,
  deviceEntities,
  getDeviceEntities,
  addDeviceChart
}) => {
  useEffect(() => {
    getDeviceEntities();
  }, [getDeviceEntities]);

  const onSubmit = (values: IAddChartFormState): void => {
    addDeviceChart(values);
  };

  return (
    <div className="b-add-chart">
      <div className="b-add-chart__breadcrumb-wrapper">
        <div className="b-add-chart__breadcrumb-wrapper__present">Projects /</div>
        <BreadcrumbsAdv />
      </div>
      <AddChartForm onSubmit={onSubmit} loading={projectLoading || undefined} deviceEntities={deviceEntities} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  projectLoading: state.project.loading,
  deviceEntities: state.project.deviceEntities
});

export const AddChart = connect(
  mapStateToProps,
  { getDeviceEntities, addDeviceChart }
)(AddChartBase);

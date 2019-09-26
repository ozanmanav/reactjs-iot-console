import React, { FunctionComponent } from 'react';
import './AddChart.scss';
import { RouteComponentProps } from 'react-router';
import { AddChartForm } from '../../../../components/forms/AddChartForm';
import BreadcrumbsAdv from '../../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { AppState } from '../../../../store';
import { connect } from 'react-redux';
import { addDevice, getDeviceModels } from '../../../../store/project/actions';
import { IProjectLoadingState } from '../../../../store/project/types';

interface AddChartBaseProps {
  addDevice: typeof addDevice;
  getDeviceModels: typeof getDeviceModels;
  projectLoading?: IProjectLoadingState;
  brands: [];
  models: [];
  deviceEntities: {};
}

export const AddChartBase: FunctionComponent<RouteComponentProps & AddChartBaseProps> = ({
  projectLoading = undefined,
  deviceEntities
}) => {
  // const onSubmit = (values: IAddChartFormState): void => {
  //   // addDevice(values);
  // };
  return (
    <div className="b-add-chart">
      <div className="b-add-chart__breadcrumb-wrapper">
        <div className="b-add-chart__breadcrumb-wrapper__present">Projects /</div>
        <BreadcrumbsAdv />
      </div>
      <AddChartForm
        onSubmit={values => console.log(values)}
        loading={projectLoading || undefined}
        deviceEntities={deviceEntities}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  projectLoading: state.project.loading,
  deviceEntities: state.project.deviceEntities
});

export const AddChart = connect(
  mapStateToProps,
  { addDevice, getDeviceModels }
)(AddChartBase);

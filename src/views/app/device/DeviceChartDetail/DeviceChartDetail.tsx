import React, { FunctionComponent, useEffect } from 'react';
import './DeviceChartDetail.scss';
import { getDeviceChartById } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { IDevice, IProjectLoadingState, IProject, IChart } from '../../../../store/project/types';
import { AppState } from '../../../../store';
import { DeviceChartCard, DeviceChartSummaryCard } from '../../../../components/ui/cards';
import { Loading } from '../../../../components/ui/loading';
import BreadcrumbsAdv from '../../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { MDBDataTable } from 'mdbreact';
import { normalizeDataForTable, normalizeSummaryData } from './utils';

interface DeviceChartDetailBaseProps {
  getDeviceChartById: typeof getDeviceChartById;
  currentProject?: IProject;
  currentDevice?: IDevice;
  currentChart?: IChart;
  deviceChartsData?: any;
  loading?: IProjectLoadingState;
  router?: any;
}

export const DeviceChartDetailBase: FunctionComponent<DeviceChartDetailBaseProps> = ({
  getDeviceChartById,
  currentChart,
  loading,
  deviceChartsData,
  router
}) => {
  console.log(deviceChartsData);
  const deviceId = router.location.pathname.split('/')[7] || '';

  useEffect(() => {
    if (deviceId) {
      getDeviceChartById(deviceId);
    }
  }, [getDeviceChartById, deviceId]);

  return (
    <div className="b-device-chart-detail">
      <div className="b-device-chart-detail__breadcrumb-wrapper">
        <div className="b-device-chart-detail__breadcrumb-wrapper__prefix">Projects /</div>
        <BreadcrumbsAdv />
        <div className="b-device-chart-detail__breadcrumb-wrapper__postfix">/ {currentChart && currentChart.name}</div>
      </div>
      {loading && loading.currentChart ? (
        <Loading />
      ) : (
        currentChart && (
          <div className="container b-device-chart-detail__charts">
            <div className="row">
              <DeviceChartCard
                chart={currentChart}
                deviceChartsData={deviceChartsData.Data}
                chartWidth={1160}
                chartHeight={350}
              />
            </div>
            <div className="row">
              {normalizeSummaryData(deviceChartsData).map(summaryData => (
                <div className="col-4">
                  <DeviceChartSummaryCard summaryData={summaryData} />
                </div>
              ))}
            </div>
            <div className="b-device-chart-detail-table">
              <MDBDataTable
                exportToCSV={true}
                hover
                responsive
                info={false}
                searching={false}
                displayEntries={false}
                data={normalizeDataForTable(deviceChartsData.Data)}
              />{' '}
            </div>
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentProject: state.project.currentProject,
  currentDevice: state.project.currentDevice,
  currentChart: state.project.currentChart,
  deviceChartsData: state.project.deviceChartsData,
  loading: state.project.loading,
  router: state.router
});

export const DeviceChartDetail = connect(
  mapStateToProps,
  { getDeviceChartById }
)(DeviceChartDetailBase);

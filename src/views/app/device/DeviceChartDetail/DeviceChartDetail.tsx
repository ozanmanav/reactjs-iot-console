import React, { FunctionComponent, useEffect } from 'react';
import './DeviceChartDetail.scss';
import { getDeviceChartById, deleteDeviceChartById } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { IDevice, IProjectLoadingState, IProject, IChart } from '../../../../store/project/types';
import { AppState } from '../../../../store';
import { DeviceChartCard, DeviceChartSummaryCard } from '../../../../components/ui/cards';
import { Loading } from '../../../../components/ui/loading';
import BreadcrumbsAdv from '../../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { MDBDataTable } from 'mdbreact';
import { normalizeDataForTable, normalizeSummaryData } from './utils';
import { ConfirmModal } from '../../../../components/modals';
import { useModal } from '../../../../components/ui';

interface DeviceChartDetailBaseProps {
  getDeviceChartById: typeof getDeviceChartById;
  deleteDeviceChartById: typeof deleteDeviceChartById;
  currentProject?: IProject;
  currentDevice?: IDevice;
  currentChart?: IChart;
  deviceChartsData?: any;
  loading?: IProjectLoadingState;
  router?: any;
}

export const DeviceChartDetailBase: FunctionComponent<DeviceChartDetailBaseProps> = ({
  getDeviceChartById,
  deleteDeviceChartById,
  currentChart,
  loading,
  deviceChartsData,
  router
}) => {
  const { open: openDeleteChartModal, hide: hideDeleteChartModal, isOpen: isOpenDeleteChartModal } = useModal();

  const deviceId = router.location.pathname.split('/')[7] || '';

  useEffect(() => {
    if (deviceId) {
      getDeviceChartById(deviceId);
    }
  }, [getDeviceChartById, deviceId]);

  const onDeleteChart = () => {
    if (currentChart) {
      deleteDeviceChartById(currentChart._id);
      hideDeleteChartModal();
    }
  };

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
        currentChart &&
        deviceChartsData && (
          <div className="container-fluid b-device-chart-detail__charts">
            <div className="row">
              <DeviceChartCard
                showEditButton
                chart={currentChart}
                deviceChartsData={deviceChartsData.Data.reverse()}
                chartHeight={350}
                showDeleteButton
                showTooltip
                onClickDelete={openDeleteChartModal}
              />
              <ConfirmModal
                title={`Are you sure delete ${currentChart.name} chart?`}
                onConfirm={onDeleteChart}
                hide={hideDeleteChartModal}
                isOpen={isOpenDeleteChartModal}
              />
            </div>
            <div className="row justify-center">
              {normalizeSummaryData(deviceChartsData, currentChart).map(summaryData => (
                <div className="col-4">
                  <DeviceChartSummaryCard summaryData={summaryData} />
                </div>
              ))}
            </div>
            <MDBDataTable
              hover
              fixed
              className="b-device-chart-detail-table"
              info={false}
              searching={false}
              sortable
              displayEntries={false}
              data={normalizeDataForTable(deviceChartsData.Data)}
            />{' '}
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
  { getDeviceChartById, deleteDeviceChartById }
)(DeviceChartDetailBase);

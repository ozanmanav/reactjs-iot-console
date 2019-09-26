import React, { FunctionComponent, useEffect } from 'react';
import './Device.scss';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { getDeviceById } from '../../../store/project/actions';
import { ProjectState } from '../../../store/project/types';
import { Loading } from '../../../components/ui/loading';
import { DeviceInfo } from './DeviceInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BreadcrumbsAdv from '../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { DeviceActivities } from './DeviceActivities';
import { DeviceSettings } from './DeviceSettings';
import { DeviceCharts } from './DeviceCharts';

interface DetailsBaseProps extends RouteComponentProps {
  getDeviceById?: typeof getDeviceById;
  project: ProjectState;
  router?: any;
}

const DeviceBase: FunctionComponent<DetailsBaseProps> = ({ router, getDeviceById, project }) => {
  const projectId = router.location.pathname.split('/')[3] || '';
  const deviceId = router.location.pathname.split('/')[5] || '';

  useEffect(() => {
    if (projectId && deviceId && getDeviceById) {
      getDeviceById(deviceId);
    }
  }, [projectId, deviceId, getDeviceById]);

  if (project.loading && project.loading.currentDevice) {
    return <Loading loading={project.loading.currentDevice} />;
  }

  return project.currentProject && project.currentDevice ? (
    <div className="b-device-details">
      <div className="b-device-details__breadcrumb-wrapper">
        <div className="b-device-details__breadcrumb-wrapper__present">Projects /</div>
        <BreadcrumbsAdv />
      </div>
      <DeviceInfo device={project.currentDevice} />
      <Tabs className="b-device-details__tabs">
        <TabList>
          <Tab>Charts</Tab>
          <Tab>Triggers</Tab>
          <Tab>Activity</Tab>
          <Tab>Archive</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanel>
          <DeviceCharts />
        </TabPanel>
        <TabPanel>Triggers</TabPanel>
        <TabPanel>
          <DeviceActivities />
        </TabPanel>
        <TabPanel>Archive</TabPanel>
        <TabPanel>
          <DeviceSettings />
        </TabPanel>
      </Tabs>
    </div>
  ) : null;
};

const mapStateToProps = (state: AppState): any => ({
  project: state.project,
  router: state.router
});

export const Device = connect(
  mapStateToProps,
  { getDeviceById }
)(DeviceBase);

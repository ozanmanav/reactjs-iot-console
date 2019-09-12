import React, { FunctionComponent, useEffect } from 'react';
import './Device.scss';
import { RouteComponentProps } from 'react-router';
import Breadcrumbs from '../../../components/ui/breadcrumbs/Breadcrumbs';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { getDeviceById } from '../../../store/project/actions';
import { ProjectState } from '../../../store/project/types';
import { Loading } from '../../../components/ui/loading';
import { DeviceInfo } from './DeviceInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Devices } from './Devices';
// import { Triggers } from './Triggers';
// import { Activities } from './Activities';
// import { Settings } from './Settings';
interface DetailsBaseProps extends RouteComponentProps {
    getDeviceById: typeof getDeviceById;
    project: ProjectState;
    router?: any;
}

const DeviceBase: FunctionComponent<DetailsBaseProps> = ({ router, getDeviceById, project }) => {
    const projectId = router.location.pathname.split('/')[3] || '';
    const deviceId = router.location.pathname.split('/')[5] || '';

    useEffect(() => {
        if (projectId && deviceId) {
            getDeviceById(deviceId);
        }
    }, [projectId, deviceId, getDeviceById]);

    if (project.loading && project.loading.currentDevice) {
        return <Loading loading={project.loading.currentDevice} />;
    }

    return project.currentProject && project.currentDevice ? (
        <div className="b-project-details">
            <Breadcrumbs
                className="b-project-details__breadcrumbs"
                routes={[
                    { title: 'Projects', link: '' },
                    { title: project.currentProject.projectName, link: '' },
                    { title: project.currentDevice.deviceName, link: '', active: true },
                ]}
                // route={'Projects / '}
                // present={`${project.currentProject.projectName} / ${project.currentDevice.deviceName}`}
            />
            <DeviceInfo device={project.currentDevice} />
            <Tabs className="b-project-details__tabs">
                <TabList>
                    <Tab>Charts</Tab>
                    <Tab>Triggers</Tab>
                    <Tab>Activity</Tab>
                    <Tab>Archive</Tab>
                    <Tab>Settings</Tab>
                </TabList>
                <TabPanel>Charts</TabPanel>
                <TabPanel>Triggers</TabPanel>
                <TabPanel>Activity</TabPanel>
                <TabPanel>Archive</TabPanel>
                <TabPanel>Settings</TabPanel>
            </Tabs>
        </div>
    ) : (
        <div>DEVICE PAGEEEEEE</div>
    );
};

const mapStateToProps = (state: AppState) => ({
    project: state.project,
    router: state.router,
});

export const Device = connect(
    mapStateToProps,
    { getDeviceById }
)(DeviceBase);

import React, { FunctionComponent, useEffect } from 'react';
import './Details.scss';
import { RouteComponentProps } from 'react-router';
import Breadcrumbs from '../../../../components/ui/breadcrumbs/Breadcrumbs';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { getProjectById } from '../../../../store/project/actions';
import { ProjectState } from '../../../../store/project/types';
import { Loading } from '../../../../components/ui/loading';
import { ProjectInfo } from './ProjectInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddDeviceIcon from '../../../../icons/plus-feynlab.png';
interface DetailsBaseProps extends RouteComponentProps {
    getProjectById: typeof getProjectById;
    project: ProjectState;
    router?: any;
}

const DetailsBase: FunctionComponent<DetailsBaseProps> = ({ router, getProjectById, project }) => {
    const projectId = router.location.pathname.split('/')[3] || '';

    useEffect(() => {
        if (projectId) {
            getProjectById(projectId);
        }
    }, [projectId]);

    if (project.loading && project.loading.currentProject) {
        return <Loading loading={project.loading.currentProject} />;
    }

    return project.currentProject ? (
        <div className="b-project-details">
            <Breadcrumbs className="b-project-details__breadcrumbs" route={'Projects / '} present={project.currentProject.projectName} />
            <ProjectInfo project={project.currentProject} />
            <Tabs>
                <TabList>
                    <Tab>Devices</Tab>
                    <Tab>Triggers</Tab>
                    <Tab>Activity</Tab>
                    <Tab>Collaborators</Tab>
                    <Tab>Settings</Tab>
                </TabList>
                <TabPanel>
                    <div className="b-project-details-device-details">
                        <div className="b-project-details-device-details__title">DEVICE DETAILS </div>
                        <div className="b-project-details-device-details__add-device">
                            <img src={AddDeviceIcon} alt="logo" className="b-project-details-device-details__add-device_icon" />
                            <span>Add Device</span>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Triggers</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Activity</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Collaborators</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Settings</h2>
                </TabPanel>
            </Tabs>
        </div>
    ) : null;
};

const mapStateToProps = (state: AppState) => ({
    project: state.project,
    router: state.router,
});

export const Details = connect(
    mapStateToProps,
    { getProjectById }
)(DetailsBase);

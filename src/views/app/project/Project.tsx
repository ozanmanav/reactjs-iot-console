import React, { FunctionComponent, useEffect } from 'react';
import './Project.scss';
import { RouteComponentProps } from 'react-router';
import Breadcrumbs from '../../../components/ui/breadcrumbs/Breadcrumbs';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { getProjectById } from '../../../store/project/actions';
import { ProjectState } from '../../../store/project/types';
import { Loading } from '../../../components/ui/loading';
import { ProjectInfo } from './ProjectInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Devices } from './Devices';
import { Activities } from './Activities';
import { Settings } from './Settings';

interface DetailsBaseProps extends RouteComponentProps {
  getProjectById: typeof getProjectById;
  project: ProjectState;
  router?: any;
}

const ProjectBase: FunctionComponent<DetailsBaseProps> = ({ router, getProjectById, project }) => {
  const projectId = router.location.pathname.split('/')[3] || '';

  useEffect(() => {
    if (projectId) {
      getProjectById(projectId);
    }
  }, [projectId, getProjectById]);

  if (project.loading && project.loading.currentProject) {
    return <Loading loading={project.loading.currentProject} />;
  }

  return project.currentProject ? (
    <div className="b-project-details">
      <Breadcrumbs
        className="b-project-details__breadcrumbs"
        route={'Projects / '}
        present={project.currentProject.projectName}
      />
      <ProjectInfo project={project.currentProject} />
      <Tabs className="b-project-details__tabs">
        <TabList>
          <Tab>Devices</Tab>
          <Tab>Activity</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanel>
          <Devices />
        </TabPanel>
        <TabPanel>
          <Activities />
        </TabPanel>
        <TabPanel>
          <Settings />
        </TabPanel>
      </Tabs>
    </div>
  ) : null;
};

const mapStateToProps = (state: AppState) => ({
  project: state.project,
  router: state.router
});

export const Project = connect(
  mapStateToProps,
  { getProjectById }
)(ProjectBase);

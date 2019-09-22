import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { IProject } from '../../../store/project/types';

const PureProjectBreadcrumbs: FunctionComponent<{
  currentProject?: IProject;
}> = ({ currentProject }) => {
  return <span>{currentProject && currentProject.projectName}</span>;
};

const mapStateToProps = (state: AppState) => ({
  currentProject: state.project.currentProject
});

export default connect(mapStateToProps)(PureProjectBreadcrumbs);

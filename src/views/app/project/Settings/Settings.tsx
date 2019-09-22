import React, { FunctionComponent } from 'react';
import './Settings.scss';
import { saveProjectSettings } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, ITriggerResponse, IProject } from '../../../../store/project/types';
import { ProjectSettingsForm } from '../../../../components/forms';
import { IProjectSettingsFormDefaultState } from '../../../../components/forms/ProjectSettingsForm/definitions';
interface SettingsBaseProps {
  saveSettings?: (values: IProjectSettingsFormDefaultState) => void;
  settings?: ITriggerResponse;
  loading?: IProjectLoadingState;
  currentProject?: IProject;
  router?: any;
}

export const SettingsBase: FunctionComponent<SettingsBaseProps> = ({ currentProject, saveSettings }) => {
  if (!currentProject) {
    return null;
  }

  const initialValues: IProjectSettingsFormDefaultState = {
    id: currentProject.id,
    name: currentProject.projectName,
    description: currentProject.projectDescription
  };

  const onSubmit = (values: IProjectSettingsFormDefaultState): void => {
    if (saveSettings) {
      saveSettings(values);
    }
  };

  return (
    <div className="project-settings">
      <ProjectSettingsForm onSubmit={onSubmit} initialValues={initialValues} />
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  currentProject: state.project.currentProject,
  loading: state.project.loading
});

export const Settings = connect(
  mapStateToProps,
  { saveProjectSettings }
)(SettingsBase);

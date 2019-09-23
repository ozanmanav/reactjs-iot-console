import React, { FunctionComponent } from 'react';
import './Settings.scss';
import { saveProjectSettings, deleteProject } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, ITriggerResponse, IProject } from '../../../../store/project/types';
import { ProjectSettingsForm } from '../../../../components/forms';
import { IProjectSettingsFormDefaultState } from '../../../../components/forms/ProjectSettingsForm/definitions';
interface SettingsBaseProps {
  saveProjectSettings?: (values: IProjectSettingsFormDefaultState) => void;
  deleteProject?: () => void;
  settings?: ITriggerResponse;
  loading?: IProjectLoadingState;
  currentProject?: IProject;
  router?: any;
}

export const SettingsBase: FunctionComponent<SettingsBaseProps> = ({
  currentProject,
  saveProjectSettings,
  deleteProject
}) => {
  if (!currentProject) {
    return null;
  }

  const initialValues: IProjectSettingsFormDefaultState = {
    id: currentProject.id,
    name: currentProject.projectName,
    description: currentProject.projectDescription
  };

  const onSubmit = (values: IProjectSettingsFormDefaultState): void => {
    if (saveProjectSettings) {
      saveProjectSettings(values);
    }
  };

  const onClickProjectDelete = (): void => {
    if (deleteProject) {
      deleteProject();
    }
  };

  return (
    <div className="project-settings">
      <ProjectSettingsForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        onClickProjectDelete={onClickProjectDelete}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  currentProject: state.project.currentProject,
  loading: state.project.loading
});

export const Settings = connect(
  mapStateToProps,
  { saveProjectSettings, deleteProject }
)(SettingsBase);

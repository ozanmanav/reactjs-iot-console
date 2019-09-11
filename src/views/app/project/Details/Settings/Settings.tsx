import React, { FunctionComponent, useEffect } from 'react';
import './Settings.scss';
import { getSettings } from '../../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../../store';
import { IProjectLoadingState, ITriggerResponse, IProject } from '../../../../../store/project/types';
import { ProjectSettingsForm } from '../../../../../components/forms';
import { IProjectSettingsFormDefaultState } from '../../../../../components/forms/ProjectSettingsForm/definitions';
interface SettingsBaseProps {
    getSettings: typeof getSettings;
    settings?: ITriggerResponse;
    loading?: IProjectLoadingState;
    router?: any;
}

export const SettingsBase: FunctionComponent<SettingsBaseProps & { currentProject?: IProject }> = ({ currentProject, loading }) => {
    if (!currentProject) {
        return null;
    }

    let initialValues: IProjectSettingsFormDefaultState = {
        name: currentProject.projectName,
        description: currentProject.projectDescription,
    };
    return (
        <div className="project-settings">
            <ProjectSettingsForm onSubmit={(values) => console.log(values)} initialValues={initialValues} />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    currentProject: state.project.currentProject,
    loading: state.project.loading,
});

export const Settings = connect(
    mapStateToProps,
    { getSettings }
)(SettingsBase);

import React, { FunctionComponent } from 'react';
import './CreateProject.scss';
import { RouteComponentProps } from 'react-router';
import { CreateProjectForm } from '../../../../components/forms/CreateProjectForm';
import Breadcrumbs from '../../../../components/ui/breadcrumbs/Breadcrumbs';
import { AppState } from '../../../../store';
import { createProject } from '../../../../store/project/actions';
import { connect } from 'react-redux';

interface CreateProjectBaseProps {
    createProject: typeof createProject;
}

export const CreateProjectBase: FunctionComponent<RouteComponentProps & CreateProjectBaseProps> = ({
    createProject
}) => {
    return (
        <div className="b-create-project">
            <Breadcrumbs className="b-create-project__breadcrumbs" route={'Projects / '} present={'Create Project'} />
            <CreateProjectForm onSubmit={createProject} />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    projectLoading: state.project.loading
});

export const CreateProject = connect(
    mapStateToProps,
    { createProject }
)(CreateProjectBase);
